import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import authConfig from './config/authConfig';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor (@Inject(forwardRef(()=>UserService)) private readonly userService:UserService,
@Inject(authConfig.KEY) private readonly authConfiguratiom:ConfigType
)
  register() {}
  login() {}
  logout() {}
  verifyEmail() {}
}
