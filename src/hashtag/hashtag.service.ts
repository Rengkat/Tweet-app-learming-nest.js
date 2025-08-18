import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HashTag } from './hastag.entity';
import { In, Repository } from 'typeorm';
import { CreateHashTagDto } from './dtos/creatHashTagDto';
import { UpdateHastagDto } from './dtos/updateHashtag.dto';

@Injectable()
export class HashtagService {
    constructor (@InjectRepository(HashTag) private readonly hastagRepository:Repository<HashTag>){}
   public async createHastag(hastagData:CreateHashTagDto){
    let hashtag= await this.hastagRepository.create(hastagData)
    return this.hastagRepository.save(hashtag)
   } 

   public async findHashtag(hashtag:number[]){
    return await this.hastagRepository.find({
        where:{id: In(hashtag)}
    })
   }

  
}
