/* eslint-disable prettier/prettier */
import { IsDate, IsEmpty, IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';
import { Order } from '../order/order.schema';
import { User } from '../user/user.schema';

export class OrderDto {

  @IsNotEmpty()
  @IsString()
  references: string;

  @IsDate()
  orderDate: Date;

  @IsNotEmpty()
  @IsString()
  customer: string;


  @IsNotEmpty()
  @IsString()
  total: string;

  @IsNotEmpty()
  @IsString()
  paid: string;

  @IsNotEmpty()
  @IsString()
  deliverer: string;

  @IsNotEmpty()
  @IsString()
  orderStatus: string;

  @IsNotEmpty()
  orderItems:Order[];
  
  @IsNotEmpty()
  @IsString()
  payment_status: string;

  @IsEmpty({message: "You can't pass user ID"})
  readonly user: User
  
}

