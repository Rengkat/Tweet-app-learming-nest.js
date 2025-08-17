import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HashTag } from './hastag.entity';
import { Repository } from 'typeorm';
import { CreateHashTagDto } from './dtos/creatHashTagDto';

@Injectable()
export class HashtagService {
    constructor (@InjectRepository(HashTag) private readonly hastagRepository:Repository<HashTag>){}
   public async createHastag(hastagData:CreateHashTagDto){
    let hashtag= await this.hastagRepository.create(hastagData)
    return this.hastagRepository.save(hashtag)
   } 
}
