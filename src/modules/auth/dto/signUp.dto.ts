/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsEmail, IsString, MinLength } from '@nestjs/class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly phone: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  readonly password: string;
}
