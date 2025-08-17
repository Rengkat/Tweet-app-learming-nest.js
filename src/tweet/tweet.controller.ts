import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
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
  getTweets() {
    return this.tweetService.getTweets()
  }

  @Get(':userId')
  getUserTweets(@Param('userId', ParseIntPipe) userId:number) {
    return this.tweetService.getUserTweets(userId)
  }

  @Patch(':tweetId')
  updateTweet() {}

  @Delete(':tweetId')
  deleteTweet() {}
}
