import {
  isBoolean,
  IsDate,
  isEmail,
  IsIn,
  isNotEmpty,
  IsNumber,
  isNumber,
  IsOptional,
  IsString,
  isStrongPassword,
  Length,
} from 'class-validator';
import { createProfileDto } from 'src/profile/dtos/creatProfile.dto';

export class createUserDto {
  @IsString()
  @isNotEmpty({ messsage: 'First name cannot be empty' })
  firstName: string;

  @IsString()
  @isNotEmpty({ messsage: 'surname cannot be empty' })
  surname: string;

  @IsDate()
  dateOfBirth?: Date;

  @isBoolean()
  isMarried?: boolean;

  @IsString()
  @isNotEmpty({ messsage: 'First name cannot be empty' })
  @isStrongPassword()
  @Length(6, 12, {
    message:
      'Password must be more that 6 characters and less than 20 characters',
  })
  password: string;

  @isEmail()
  @isNotEmpty()
  email: string;

  @isNumber()
  @isNotEmpty()
  id: number;

  @IsOptional()
  profile: createProfileDto | null;
}
