/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class Deliverer {
  @Prop()
  _id:string;
  
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  contact: number;

  @Prop()
  email: string;

 
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Deliverer'
  })
   owner: Deliverer;
   



}
export const DelivererSchema = SchemaFactory.createForClass(Deliverer);
