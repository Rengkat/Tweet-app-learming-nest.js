import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tweets } from './tweetEntity';
import { Repository } from 'typeorm';
import { createTweetDto } from './dtos/createTweetDto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class TweetService {
  constructor(
    private readonly userService: UserService,
    @InjectRepository(Tweets)
    private readonly tweetRepository: Repository<Tweets>,
  ) {}
  public async createTweet(tweet: createTweetDto) {
    let user = await this.userService.getUser(tweet.userId);
    const newTweet = this.tweetRepository.create({...tweet, user:user});
    await this.tweetRepository.save(newTweet);
    return newTweet;
  }
  getTweets() {
    return this.tweetRepository.find();
  }

  public async getUserTweets(id: number) {
  return await this.tweetRepository.find({
    where: { userId: id }
  });
}
  updateTweet() {}
  deleteTweet() {}
}
