import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('register')
  register(@Body() user) {}

  @Post('login')
  login() {}

  @Post('logout')
  logout() {}

  @Post()
  verifyEmail() {}
}
