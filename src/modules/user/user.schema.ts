/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserTypes } from '../enum/userTypes';

@Schema({
  timestamps: true,
})
export class User {

  @Prop()
  username: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;

  @Prop()
  phone: string;

  @Prop()
  password: string;

  @Prop({
    type: String,
  })
  picture: string;

  @Prop({
    type: String,
    default: UserTypes.ADMIN,
    enum: [
      UserTypes.ADMIN,
      UserTypes.DELIVER,
    ],
  })
  type: UserTypes;

  @Prop({
    type: String,
  })
  token: string;



}
export const UserSchema = SchemaFactory.createForClass(User);
