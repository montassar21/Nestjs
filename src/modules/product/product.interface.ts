/* eslint-disable prettier/prettier */
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';
import { User } from '../user/user.schema';

export interface Product extends Document {
  readonly _id: string;
  readonly code: string;
  readonly name: string;
  readonly image: string;
  readonly category: string;
  readonly brand: string;
  readonly cost: number;
  readonly price: number;
  readonly unit: string;
  readonly quantity: number;
  readonly alert_quntity: number;
  readonly expiration_date: string;
  readonly created_at: Date;
  readonly owner:any;
}
