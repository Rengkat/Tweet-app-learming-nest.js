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
import { PaginationQueryDto } from 'src/common/PaginationQueryDto';
import { skip } from 'node:test';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userDto: createUserDto) {
    return this.userService.createUser(userDto);
  }

  @Get()
  async getUsers(
    @Query() paginationQueryDto: PaginationQueryDto,
  ) {
    return this.userService.getUsers(paginationQueryDto);
  }

  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUser(id);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
