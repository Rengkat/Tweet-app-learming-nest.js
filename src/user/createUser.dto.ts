import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator';
import { createProfileDto } from 'src/profile/dtos/creatProfile.dto';

export class createUserDto {
  @IsString()
  @IsNotEmpty({ message: 'First name cannot be empty' })
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'Surname cannot be empty' })
  surname: string;

  @IsOptional()
  @IsDate()
  dateOfBirth?: Date;

  @IsOptional()
  @IsBoolean()
  isMarried?: boolean;

  @IsString()
  @IsNotEmpty({ message: 'Password cannot be empty' })
  @IsStrongPassword()
  @Length(6, 20, {
    message: 'Password must be 6-20 characters',
  })
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsOptional()
  profile?: createProfileDto;
}
