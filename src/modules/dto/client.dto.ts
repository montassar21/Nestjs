/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';

export class ClientDto {
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;



  @IsNotEmpty()
  @IsString()
  phone: string;


  @IsNotEmpty()
  @IsString()

  ville: string;

  @IsNotEmpty()
  @IsString()

  roles: string;
}
