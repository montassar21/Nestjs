/* eslint-disable prettier/prettier */
import { IsDate, IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';

export class PurchasesDto {
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsString()
  references: string;

  @IsNotEmpty()
  @IsString()
  supplier: string;


  @IsNotEmpty()
  @IsString()
  total: string;

  @IsNotEmpty()
  @IsString()
  paid: string;

  @IsNotEmpty()
  @IsString()
  purchase_status: string;

  @IsNotEmpty()
  @IsString()
  payment_status: string;
}

