import { Repository } from 'typeorm';
import { createProfileDto } from './dtos/creatProfile.dto';
import { Profile } from './profile.Entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async getProfile(userId: number) {
    return this.profileRepository.findOne({ where: { user: { id: userId } } });
  }

  async createProfile(profileDto: createProfileDto) {
    const profile = this.profileRepository.create(profileDto);
    return this.profileRepository.save(profile);
  }

  async updateProfile(id: number, updateData: Partial<Profile>) {
    await this.profileRepository.update(id, updateData);
    return this.profileRepository.findOneBy({ id });
  }
}
