/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from '../product/product.schema';
import mongoose from 'mongoose';
import { User } from '../user/user.schema';

@Schema({
  timestamps: true,
})
export class Order {
 @Prop()
 _id:string;

  @Prop()
  reference: string;

  @Prop()
  orderDate: string;

  @Prop()
  customer: string;

  @Prop()
  total: number;

  @Prop()
  paid: number;

  @Prop()
  deliverer: string;

  @Prop()
  orderStatus: string;

  @Prop()
  orderItems: Product[];
  
  @Prop()
  payment_status: string;
  
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  })
  owner: User;


}
export const OrderSchema = SchemaFactory.createForClass(Order);
