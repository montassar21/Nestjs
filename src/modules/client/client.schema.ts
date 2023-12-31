/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../user/user.schema';

@Schema({
  timestamps: true,
})
export class Client {
  @Prop()
  _id:string;
  
  @Prop()
  customerName: string;

  @Prop()
  address: string;

  @Prop()
  contactNo: number;

  @Prop()
  email: string;

  @Prop()
  inputCity: string;

  @Prop()
  state:string;

  @Prop()
  inputZip: string;

 
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  })
   owner: User;
   
  @Prop()
  gender: string;




}
export const ClientSchema = SchemaFactory.createForClass(Client);
