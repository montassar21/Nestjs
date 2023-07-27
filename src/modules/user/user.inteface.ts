/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface User extends Document {
  readonly userId: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly picture: string;
  readonly phone: string;
  readonly created_at: Date;
  readonly roles: string[];
}
