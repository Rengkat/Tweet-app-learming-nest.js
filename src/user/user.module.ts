import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TweetModule } from 'src/tweet/tweet.module';
import { ProfileModule } from 'src/profile/profile.module';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.Entity';
import { PaginationModule } from 'src/common/pagination/pagination.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [
    TweetModule,
    ProfileModule,
    // AuthModule,
    PaginationModule, //for pagination
    TypeOrmModule.forFeature([User]),
  ],
})
export class UserModule {}
