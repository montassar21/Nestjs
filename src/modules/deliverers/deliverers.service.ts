/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { DelivererDto } from '../dto/deliverer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deliverer } from './deliverers.schema';

@Injectable()
export class DelivererService {
  constructor(@InjectModel(Deliverer.name) private delivererModel: Model<Deliverer>) {}
  async add(currentUser: any, body: DelivererDto) {
    const data = Object.assign(body, { owner: currentUser._id });
    return this.delivererModel.create(data);
  }

  findAll(currentUser: any) {
    return this.delivererModel.find({ owner: currentUser._id });
  }

  findOne(currentUser: any, id: string) {
    return this.delivererModel.findOne({ owner: currentUser._id, _id: id });
  }

  update(id: string, body: DelivererDto) {
    return this.delivererModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }

  async delete(id: string): Promise<any> {
    return this.delivererModel.findOneAndRemove({ _id: id });
  }
}
