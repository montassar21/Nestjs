import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.schema';
import { OrderDto } from '../dto/order.dto';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}
  add(currentUser: any, body: OrderDto) {
    const data = Object.assign(body, { owner: currentUser._id });
    return this.orderModel.create(data);
  }

  findAll(currentUser: any) {
    console.log(currentUser._id);
    return this.orderModel.find({ owner: currentUser._id });
  }

  findOne(id: string) {
    return this.orderModel.findOne({ _id: id });
  }

  update(id: string, body: OrderDto) {
    return this.orderModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }

  async delete(id: string): Promise<any> {
    return this.orderModel.findOneAndRemove({ _id: id });
  }
}
