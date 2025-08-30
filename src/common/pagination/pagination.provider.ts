import { Inject, Injectable } from '@nestjs/common';
import { PaginationQueryDto } from '../PaginationQueryDto';
import { FindManyOptions, FindOptionsWhere, ObjectLiteral, Repository } from 'typeorm';
import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { PaginationInterface } from './paginated.interface';
// we are creating Module and Interface to be able to 
// use pagination in all the module. I t will be like a cetral place

//provider is similar as service but this is to inject it into another service
@Injectable()
export class PaginationProvider {
    constructor(@Inject(REQUEST) private readonly request:Request){}//for links page url
    public async paginationQuery<T extends ObjectLiteral>(
        paginationQueryDto:PaginationQueryDto,
        //we need the reposotory of what we want to paginate, since is generic we use a general name
        repository:Repository<T>,
        where?:FindOptionsWhere<T> ,//to use where for query if present,
        relations?:string[]

    ):Promise<PaginationInterface<T>>{
        //we are using repository whic is a geral one
        const findOptions:FindManyOptions<T>={
            skip:(paginationQueryDto.page -1)* paginationQueryDto.limit,
            take:paginationQueryDto.limit
        }
        if (where) {
            findOptions.where=where
        }
         if (relations) {
            findOptions.relations=relations
         }
        const result = await repository.find(findOptions)
        const totalItems= await repository.count()
        const totalPage = Math.ceil(totalItems/paginationQueryDto.limit)
        const nextPage= paginationQueryDto.page===totalPage?
        paginationQueryDto.page:paginationQueryDto.page++
        const previousPage =paginationQueryDto.page<1? 1:paginationQueryDto.page
        const baseUrl = `${this.request.protocol}://${this.request.headers.host}/`
        const newUrl = new URL(this.request.url, baseUrl)
        const response:PaginationInterface<T> ={
            data:result,
    meta:{
        itemPerPage:paginationQueryDto.limit,
        totalItems:totalItems,
        currentPage:paginationQueryDto.page,
        totalPages:totalPage
    },
    links:{
        first:`${newUrl.origin}${newUrl.pathname}?limit=${paginationQueryDto.limit}&page=1`,
        last:`${newUrl.origin}${newUrl.pathname}?limit=${paginationQueryDto.limit}&page=${totalPage}`,
        current:`${newUrl.origin}${newUrl.pathname}?limit=${paginationQueryDto.limit}&page=${paginationQueryDto.page}`,
        previous:`${newUrl.origin}${newUrl.pathname}?limit=${paginationQueryDto.limit}&page=${previousPage}`,
        next:`${newUrl.origin}${newUrl.pathname}?limit=${paginationQueryDto.limit}&page=${nextPage}`
    }
        }
        return response
    }
}
