import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
// import { User } from './user.inference';
import { createUserDto } from './createUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.Entity';
import { Repository } from 'typeorm';

@Controller('users')
export class UserController {
  constructor(
    // @InjectRepository(User) private userRepository: Repository<User>,
    private readonly userService: UserService,
  ) {}

  @Post()
  createUser(
    @Body()
    userDto: createUserDto,
  ) {}

  @Get()
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('name') name: string,
    @Query('age', ParseIntPipe) param: number,
  ) {}

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {}

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    this.deleteUser(id);
  }
}
