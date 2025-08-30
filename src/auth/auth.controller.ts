import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { createUserDto } from 'src/user/createUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('register')
  public async register(@Body() createUserDto: createUserDto) {
   return await this.auth.register(createUserDto)

  }

  @Post('login')
  login() {}

  @Post('logout')
  logout() {}

  @Post()
  verifyEmail() {}
}
