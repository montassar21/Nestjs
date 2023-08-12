/* eslint-disable prettier/prettier */
import { IsEmpty, IsNotEmpty, IsNumber, IsString } from '@nestjs/class-validator';
import { User } from '../user/user.schema';

export class ProductDto {
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

  alert: string;

  @IsNotEmpty()
  expiration_date: string;

  @IsEmpty({message: "You can't pass user ID"})
  readonly user: User
}
