import { Body, Controller, Delete, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateHashTagDto } from './dtos/creatHashTagDto';
import { HashtagService } from './hashtag.service';

@Controller('hashtag')
export class HashtagController {
    constructor(private readonly hastagService:HashtagService){}
    @Post()
    public createNewHashtag (@Body() hastag:CreateHashTagDto){
this.hastagService.createHastag(hastag)
    }

    @Delete(':id')
    deleteHashtag(@Param('id', ParseIntPipe) id:number){
        return this.hastagService.deleteHashtag(id)
    }
}
