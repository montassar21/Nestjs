/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../user/user.schema';

@Schema({
  timestamps: true,
})
export class Suppliers {
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

    @Prop()
  service: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  })
  owner: User;


}
export const SuppliersSchema = SchemaFactory.createForClass(Suppliers);


