import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweet')
export class TweetController {
  constructor(private readonly tweet: TweetService) {}
  @Post()
  createTweet() {}

  @Get()
  getTweets() {}

  @Get(':userId')
  getUserTweets() {}

  @Patch(':tweetId')
  updateTweet() {}

  @Delete(':tweetId')
  deleteTweet() {}
}
