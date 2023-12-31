/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';

export class ClientDto {
  @IsNotEmpty()
  @IsString()
  customerName: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  contactNo: number;

  @IsNotEmpty()
  @IsString()

  inputCity: string;

  @IsNotEmpty()
  @IsString()
  state: string;
  
  @IsNotEmpty()
  @IsString()
  inputZip: string;

    @IsNotEmpty()
  @IsString()
  gender: string;
}
