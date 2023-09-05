/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface UserDocument extends Document {
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly image: string;
  readonly phone: string;
  readonly created_at: Date;
  readonly roles: string[];
}
