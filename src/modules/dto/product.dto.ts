/* eslint-disable prettier/prettier */
import { IsEmpty, IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';
import { User } from '../user/user.schema';
import mongoose from 'mongoose';

export class ProductDto {
  @IsNotEmpty()
  _id: mongoose.Types.ObjectId;

  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()

  brand: string;

  @IsNotEmpty()
  @IsString()

  category: string;

  @IsNotEmpty()
  @IsNumber()
  cost: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsString()

  unit: string;

  @IsNotEmpty()
  @IsString()

  alert_quantity: string;

  @IsNotEmpty()
  expiration_date: string;

  @IsEmpty({message: "You can't pass user ID"})
  readonly owner: User
}
