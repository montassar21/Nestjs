/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Order } from 'src/modules/order/order.schema';
import { Client } from '../client/client.schema';
import { Product } from '../product/product.schema';
import mongoose from 'mongoose';
import { User } from '../user/user.schema';

@Schema({
  timestamps: true,
})
export class Invoices {
  @Prop()
  _id: string;
  
  @Prop()
  client:Client;

  @Prop()
  number:number;

  @Prop()
  date:Date;

  @Prop()
  payment_terms:number;

  @Prop()
  products:Product[];

  @Prop()
  total:number;

  @Prop()
  additionalDetails:string;

  
  @Prop()
  status:string;
  
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  })
  owner: User;



}
export const InvoicesSchema = SchemaFactory.createForClass(Invoices);
