import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './user.inteface';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') public userModel: Model<UserDocument>) {}

  findOne(email: string) {
    return this.userModel.findOne({ email: email });
  }

  async updatePassword(id: string, body: any) {
    const hashedPassword = await bcrypt.hash(body.password, 8);
    body.password = hashedPassword;
    return this.userModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }
  async updateInfo(id: string, body: any) {
    return this.userModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }
  async updateImage(id: string, body: any) {
    return this.userModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }
}
