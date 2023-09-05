/* eslint-disable prettier/prettier */
import { Injectable, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Suppliers } from './suppliers.schema';
import { SuppliersDto } from '../dto/suppliers.dto';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectModel(Suppliers.name) private suppliersModel: Model<Suppliers>,
  ) {}
  add(currentUser: any, body: SuppliersDto) {
    const data = Object.assign(body, { owner: currentUser._id });
    return this.suppliersModel.create(data);
  }

  findAll(currentUser: any) {
    return this.suppliersModel.find({ owner: currentUser._id });
  }

  findOne(currentUser: any, id: string) {
    return this.suppliersModel.findOne({ owner: currentUser._id, _id: id });
  }

  update(id: string, body: SuppliersDto) {
    return this.suppliersModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }

  delete(id: string): Promise<any> {
    return this.suppliersModel.findOneAndRemove({ _id: id });
  }

}
