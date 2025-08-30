import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweets } from './tweetEntity';
import { HashTag } from 'src/hashtag/hastag.entity';
import { PaginationModule } from 'src/common/pagination/pagination.module';

@Module({
  controllers: [TweetController],
  providers: [TweetService],
  exports: [TweetService],
  imports: [UserModule,HashTag, PaginationModule,//for pagination
     TypeOrmModule.forFeature([Tweets])],
})
export class TweetModule {}
