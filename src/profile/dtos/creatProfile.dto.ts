import {
  isBoolean,
  IsDate,
  isEmail,
  IsIn,
  isNotEmpty,
  IsNumber,
  isNumber,
  IsString,
  isStrongPassword,
  Length,
} from 'class-validator';

export class createProfileDto {
  @IsString()
  @isNotEmpty()
  firstName: string;

  @IsString()
  @isNotEmpty()
  surname: string;

  @IsDate()
  dateOfBirth?: Date;

  @isBoolean()
  isMarried?: boolean;

  @IsString()
  @isNotEmpty()
  @isStrongPassword()
  @Length(6, 12)
  password: string;

  @isEmail()
  @isNotEmpty()
  email: string;

  @isNumber()
  @isNotEmpty()
  id: number;

  @IsString()
  country: string;

  @IsString()
  bio: string;
}
