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
import { CommonModule } from './common/common.module';
import { PaginationModule } from './common/pagination/pagination.module';
import  appConfig  from 'config/app.config';
import databaseConfig from 'config/database.config';
const ENV = process.env.NODE_ENV
@Module({
  imports: [
    UserModule,
    ProfileModule,
    TweetModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal:true, // to use the .env anywhere in the app
      envFilePath:!ENV? '.env' : `.env.${ENV.trim()}`, //when no set, it will look for it by default in the root folder
      // 
      load:[appConfig] .//at. load our config file
    })
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, databaseConfig],// set this cos typeORM dont have access to the .env
      inject: [ConfigService],
      useFactory: (configService:ConfigService) => ({ // we asre using database.something, simply in the appConfig, there is databse as object
        type: configService.get('database.type'),
        host: configService.get('databse.host'),
        port: configService.get('databse.port'),
        username: configService.get('databse.username'),
        password:configService.get('databse.password'),
        database: configService.get('databse.name'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: configService.get('SYNC_DB'),
        logging: true,
      
      }),
    }),
    HashtagModule,
    PaginationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
