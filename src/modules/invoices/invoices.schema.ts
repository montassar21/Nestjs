/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Order } from 'src/modules/order/order.schema';

@Schema({
  timestamps: true,
})
export class Invoices {


  @Prop()
  invoiceDate: Date;

  @Prop()
  customer: string;

  @Prop()
  total: number;

  @Prop()
  order: Order[];




}
export const InvoicesSchema = SchemaFactory.createForClass(Invoices);
