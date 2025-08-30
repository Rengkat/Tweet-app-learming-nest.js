import { Injectable } from '@nestjs/common';
import { PaginationQueryDto } from '../PaginationQueryDto';
import { FindOptionsWhere, ObjectLiteral, Repository } from 'typeorm';
// we are creating Module and Interface to be able to 
// use pagination in all the module. I t will be like a cetral place

//provider is similar as service but this is to inject it into another service
@Injectable()
export class PaginationProvider {
    public async paginationQuery<T extends ObjectLiteral>(
        paginationQueryDto:PaginationQueryDto,
        //we need the reposotory of what we want to paginate, since is generic we use a general name
        repository:Repository<T>,
        where?:FindOptionsWhere<T> //to use where for query if present
    ){
        //we are using repository whic is a geral one
        return await repository.find({
            skip:(paginationQueryDto.page -1)* paginationQueryDto.limit,
            take:paginationQueryDto.limit
          });
    }
}
