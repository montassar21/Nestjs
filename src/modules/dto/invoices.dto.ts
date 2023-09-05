/* eslint-disable prettier/prettier */
import { IsDate, IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';
import { Order } from '../order/order.schema';
import { Client } from '../client/client.schema';
import { Product } from '../product/product.schema';

export class InvoicesDto {
  @IsNotEmpty()
  _id: string;

  @IsNotEmpty()
  client: Client;

  @IsNotEmpty()
  number:number;

  @IsNotEmpty()
  @IsDate()
  date:Date;

  @IsNotEmpty()
  @IsNumber()
  payment_terms:number;

  @IsNotEmpty()
  products: Product[];

  
  @IsNotEmpty()
  @IsNumber()
  total:number;

  @IsNotEmpty()
  @IsString()
  additionalDetails: string;

  @IsNotEmpty()
  @IsString()
  status: string;



}

