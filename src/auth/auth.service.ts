import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import authConfig from './config/authConfig';
import { ConfigType } from '@nestjs/config';
import { createUserDto } from 'src/user/createUser.dto';

@Injectable()
export class AuthService {
  constructor (
    // @Inject(forwardRef(()=>UserService)) private readonly userService:UserService,for circular dependecies
    
    @Inject(UserService) private readonly userService:UserService,
@Inject(authConfig.KEY) private readonly authConfiguratiom:ConfigType
)
  public async register(createUserDto:createUserDto) {
    return await this.userService.createUser(createUserDto)
  }
  login() {}
  logout() {}
  verifyEmail() {}
}
