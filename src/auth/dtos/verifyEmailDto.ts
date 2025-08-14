import { PartialType } from '@nestjs/mapped-types';
import { createUserDto } from 'src/user/createUser.dto';

export class verifyEmailDto extends PartialType(createUserDto) {
  //   firstName: string;
  //   surname: string;
  //   email: string;
  //   password: string;
}
