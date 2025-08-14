import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { createProfileDto } from './dtos/creatProfile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profile: ProfileService) {}
  @Get(':userId')
  getProfile(@Param('id') id: number) {}

  @Get()
  getCurrentUserProfile() {}

  @Post()
  createProfile(@Body() profile: createProfileDto) {}

  @Patch(':userId')
  updateProfile(@Param('id') id: number) {}

  @Patch(':id')
  updateCurrentUserProfile(@Param('id') id: number) {}
}
