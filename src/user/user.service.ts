import { Body, Injectable, Post } from '@nestjs/common';
// import { User } from './user.inference';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.Entity';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { createUserDto } from './createUser.dto';
import { Profile } from 'src/profile/profile.Entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    //using the .env in any service
    private readonly configService:ConfigService
  ) {}

  public async createUser(user: createUserDto) {
    const existUser = await this.userRepository.findOne({
      where: { email: user.email },
    });
    if (existUser) {
      throw new Error('User already exist');
    }
    //create profile and the user
    user.profile = user.profile ?? {}; // if user profile is null, set it to an empty array
    // let profile = this.profileRepository.create(user.profile);

    // now save the profile to be able to create user next
    // await this.profileRepository.save(profile);

    // attach user to the profile
    // user.profile = profile;
    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }

  getUsers() {
    const enveriment= this.configService.get<string>('ENV_MODE')
    console.log(enveriment) //how to read or use the .env values
    return this.userRepository.find({
      //can enable eager loading for all related data
      // relations: {
      //   profile: true,
      // },
    });
  }

  public async getUser(id: number) {
    return await this.userRepository.findOneBy({
      id,
    });
  }
  async delete(id: number) {
    //find the user
    const user = await this.userRepository.findBy({ id });
    // delete the user
    this.userRepository.delete(id);

    // delete the profile
    // this.profileRepository.delete(user.profile.id);
    return { deleted: true };
  }
}
