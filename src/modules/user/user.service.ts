import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './user.inteface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') public userModel: Model<UserDocument>) {}
}
