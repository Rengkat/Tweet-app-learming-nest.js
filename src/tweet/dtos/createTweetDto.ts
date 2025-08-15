import {
  IsInt,
  IsNotEmpty,
  isNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { createUserDto } from 'src/user/createUser.dto';

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
