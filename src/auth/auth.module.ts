import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './authEntity';
import { ConfigModule } from '@nestjs/config';
import authConfig from './config/authConfig';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    // forwardRef(()=>UserModule), fot circular dependecies 
    UserModule,
    forwardRef(()=>UserModule),
     TypeOrmModule.forFeature([Auth]),
      ConfigModule.forFeature(authConfig)],
  exports: [AuthService],
})
export class AuthModule {}
