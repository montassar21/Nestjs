/* eslint-disable prettier/prettier */
import { IsDate, IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';
import { Order } from '../order/order.schema';

export class InvoicesDto {
    
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsString()
  customer: string;


  @IsNotEmpty()
  @IsString()
  total: string;

  @IsNotEmpty()
  order: Order[];


}

