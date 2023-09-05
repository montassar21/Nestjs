/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';

export class SuppliersDto {
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
  @IsNumber()
  contact: number;

  @IsNotEmpty()
  contactNo: number;
  @IsNotEmpty()
      @IsString()
  service: string;

}
