import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { createTweetDto } from './dtos/createTweetDto';
import { UpdateTweetDto } from './dtos/updateTweet.dto';

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
  updateTweet(@Body() tweet:UpdateTweetDto) {
    this.tweetService.updateHashtag(tweet)
  }

  @Delete(':tweetId')
  public async deleteTweet(@Param('tweetId', ParseIntPipe) tweetId:number) {
    await this.tweetService.deleteTweet(tweetId)
  }
}
