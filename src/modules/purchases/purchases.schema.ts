/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Purchase {

  @Prop() // Adding the createdAt date column
  createdAt: Date;

  @Prop()
  reference: string;

  @Prop()
  supplier: string;


  @Prop()
  total: number;

  @Prop()
  paid: number;

  @Prop()
  purchase_status: string;
  
  @Prop()
  payment_status: string;


}
export const PurchaseSchema = SchemaFactory.createForClass(Purchase);
