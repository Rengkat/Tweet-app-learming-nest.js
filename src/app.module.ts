import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { TweetModule } from './tweet/tweet.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HashtagModule } from './hashtag/hashtag.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    ProfileModule,
    TweetModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal:true, // to use the .env anywhere in the app
      envFilePath:'.env' //when no set, it will look for it by default in the root folder
    }),
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'your_username',
        password: 'your_password',
        database: 'your_db_name',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: true,
      }),
    }),
    HashtagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
