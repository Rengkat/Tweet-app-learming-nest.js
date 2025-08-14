import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweets } from './tweetEntity';

@Module({
  controllers: [TweetController],
  providers: [TweetService],
  exports: [TweetService],
  imports: [UserModule, TypeOrmModule.forFeature([Tweets])],
})
export class TweetModule {}
