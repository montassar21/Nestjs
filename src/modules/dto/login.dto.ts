/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsEmail, IsString, MinLength } from '@nestjs/class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
   email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
