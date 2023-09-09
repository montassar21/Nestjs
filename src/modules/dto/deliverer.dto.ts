/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class DelivererDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  contact: number;
    
  @IsNotEmpty()
  @IsEmail()
  owner: string;
}
