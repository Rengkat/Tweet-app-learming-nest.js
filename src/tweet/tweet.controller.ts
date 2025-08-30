import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { createTweetDto } from './dtos/createTweetDto';
import { UpdateTweetDto } from './dtos/updateTweet.dto';
import { PaginationQueryDto } from 'src/common/PaginationQueryDto';
import { UserService } from 'src/user/user.service';
import { GetTweetDto } from './dtos/getTweetQueryDto';

@Controller('tweet')
export class TweetController {
  constructor(private readonly tweetService: TweetService,
    private readonly user:UserService
  ) {}
  @Post()
  createTweet(@Body() tweetData:createTweetDto) {
    return this.tweetService.createTweet(tweetData)
  }

  @Get()
  getTweets() {
    return this.tweetService.getTweets()
  }

  @Get(':userId')
  getUserTweets(@Param('userId', ParseIntPipe) userId:number,
  // @Query() getTweetDto: GetTweetDto
  @Query() pagination: PaginationQueryDto
) {
   
    return this.tweetService.getUserTweets(userId,pagination)
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
