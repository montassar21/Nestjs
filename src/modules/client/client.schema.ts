/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Client {
  @Prop()
  code: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  ville: string;

  @Prop()
  roles: string;



}
export const ClientSchema = SchemaFactory.createForClass(Client);
