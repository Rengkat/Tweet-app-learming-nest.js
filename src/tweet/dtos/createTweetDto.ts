import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class createTweetDto {
  // post, timestamp, user(relation with user), reaction{like, retweet, comment}, comments
  @IsString()
  @IsNotEmpty()
  post: string;

  @IsOptional()
  image?: string;

  @IsNotEmpty()
  @IsInt()
  userId: number;
}
