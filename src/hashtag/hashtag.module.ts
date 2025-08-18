import { Module } from '@nestjs/common';
import { HashtagController } from './hashtag.controller';
import { HashtagService } from './hashtag.service';
import { TweetModule } from 'src/tweet/tweet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HashTag } from './hastag.entity';

@Module({
  controllers: [HashtagController],
  providers: [HashtagService],
  exports:[HashtagService],
  imports:[TweetModule, TypeOrmModule.forFeature([HashTag])]
})
export class HashtagModule {}
