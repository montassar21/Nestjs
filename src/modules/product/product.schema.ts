/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../user/user.schema';

@Schema({
  timestamps: true,
})
export class Product {
  @Prop()
  _id: string;
  @Prop()
  code: string;

  @Prop({nullable:true})
  image: string;

  @Prop()
  name: string;

  @Prop()
  brand: string;

  @Prop()
  category: string;

  @Prop()
  cost: number;

  @Prop()
  price: number;

  @Prop()
  quantity: number;

  @Prop()
  unit: string;

  @Prop()
  alert_quantity: number;
  
  @Prop()
  supplier:string;

  @Prop()
  expiration_date: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  })
  owner: User;


}
export const ProductSchema = SchemaFactory.createForClass(Product);


