import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './profile.Entity';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
  exports: [ProfileService],
  imports: [UserModule, TypeOrmModule.forFeature([Profile])],
})
export class ProfileModule {}
