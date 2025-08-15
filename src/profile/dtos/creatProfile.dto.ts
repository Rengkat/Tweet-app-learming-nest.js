import {
  IsBoolean,
  isBoolean,
  IsDate,
  IsEmail,
  isEmail,
  IsIn,
  IsNotEmpty,
  isNotEmpty,
  IsNumber,
  isNumber,
  IsString,
  IsStrongPassword,
  isStrongPassword,
  Length,
} from 'class-validator';

export class createProfileDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  surname: string;

  @IsDate()
  dateOfBirth?: Date;

  @IsBoolean()
  isMarried?: boolean;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword()
  @Length(6, 12)
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  country: string;

  @IsString()
  bio: string;
}
