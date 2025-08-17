import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { createTweetDto } from './dtos/createTweetDto';

@Controller('tweet')
export class TweetController {
  constructor(private readonly tweetService: TweetService) {}
  @Post()
  createTweet(@Body() tweetData:createTweetDto) {
    return this.tweetService.createTweet(tweetData)
  }

  @Get()
  getTweets() {}

  @Get(':userId')
  getUserTweets() {}

  @Patch(':tweetId')
  updateTweet() {}

  @Delete(':tweetId')
  deleteTweet() {}
}
