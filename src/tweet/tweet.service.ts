import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tweets } from './tweetEntity';
import { Repository } from 'typeorm';
import { createTweetDto } from './dtos/createTweetDto';
import { UserService } from 'src/user/user.service';
import { HashtagService } from 'src/hashtag/hashtag.service';
import { UpdateHastagDto } from 'src/hashtag/dtos/updateHashtag.dto';
import { UpdateTweetDto } from './dtos/updateTweet.dto';
import { PaginationQueryDto } from 'src/common/PaginationQueryDto';
import { UserAlreadyExistEception } from 'src/customExceptions/userAlreadyExist.exception';
import { notFoundException } from 'src/customExceptions/notFoundException';
import { GetTweetDto } from './dtos/getTweetQueryDto';
import { PaginationProvider } from 'src/common/pagination/pagination.provider';

@Injectable()
export class TweetService {
  constructor(
    private readonly userService: UserService,
    private readonly hashtagService:HashtagService,
    @InjectRepository(Tweets)
    private readonly tweetRepository: Repository<Tweets>,
    private readonly paginationQueryProvider:PaginationProvider
  ) {}
public async createTweet(tweet: createTweetDto) {
  const user = await this.userService.getUser(tweet.userId);
  if (!user) {
    throw new NotFoundException('User not found');
  }
  //fetch all hashtags
let hashtags= await this.hashtagService.findHashtag(tweet.hashtags ??[])
  let newTweet=  this.tweetRepository.create({...tweet, user,hashtags})
  return this.tweetRepository.save(newTweet);

}
  getTweets() {
    return this.tweetRepository.find();
  }

  public async getUserTweets(id: number, paginationQueryDto:PaginationQueryDto) {
  const user = await this.userService.getUser(id)
  if (!user) {
    throw new notFoundException('user')
  }
  return await this.paginationQueryProvider.paginationQuery(
    paginationQueryDto,
    this.tweetRepository,
    {user:{id}}
  )
  //THIS IS WITHOUT USING PAGINATION PROVIDER
    // return await this.tweetRepository.find({
    // where: {user:{id} },
    // relations:{user:true, hashtags:true},
    // INTERSECTION
    // skip:(getTweetDto.page -1)* getTweetDto.limit,
    // take:getTweetDto.limit
  //   skip:(pagination.page -1)* pagination.limit,
  //   take:pagination.limit
  // });
  
}
  public async updateHashtag(updateTweet:UpdateTweetDto){
    //find all hashtags
    let hashtags = await this.hashtagService.findHashtag(updateTweet.hashtags??[])
   
  // find tweet by id
  let tweet = await this.tweetRepository.findOneBy({
    id:updateTweet.id
  })
  tweet?.post = updateTweet.post?? tweet?.post
  tweet?.image=updateTweet.image?? tweet?.image
  tweet?.hashtags = hashtags

  await this.tweetRepository.save(tweet)
  }

 public async deleteTweet(id:number) {
  this.tweetRepository.delete({
    id
  })
  return {deleted:true, id}
 }
}