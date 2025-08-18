import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tweets } from './tweetEntity';
import { Repository } from 'typeorm';
import { createTweetDto } from './dtos/createTweetDto';
import { UserService } from 'src/user/user.service';
import { HashtagService } from 'src/hashtag/hashtag.service';

@Injectable()
export class TweetService {
  constructor(
    private readonly userService: UserService,
    private readonly hashtagService:HashtagService,
    @InjectRepository(Tweets)
    private readonly tweetRepository: Repository<Tweets>,
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

  public async getUserTweets(id: number) {
  return await this.tweetRepository.find({
    where: {user:{id} },
    relations:{user:true}
  });
}
  updateTweet() {}
  deleteTweet() {}
}
