import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { TweetModule } from './tweet/tweet.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HashtagModule } from './hashtag/hashtag.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
const ENV = process.env.NODE_ENV
@Module({
  imports: [
    UserModule,
    ProfileModule,
    TweetModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal:true, // to use the .env anywhere in the app
      envFilePath:!ENV? '.env' : `.env.${ENV.trim()}` //when no set, it will look for it by default in the root folder
    })
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],// set this cos typeORM dont have access to the .env
      inject: [ConfigService],
      useFactory: (configService:ConfigService) => ({
        type: configService.get('DB_TYPE'),
        host: configService.get('HOST'),
        port: configService.get('PORT'),
        username: configService.get('USER_NAME'),
        password:configService.get('PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: configService.get('SYNC_DB'),
        logging: true,
      
      }),
    }),
    HashtagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
