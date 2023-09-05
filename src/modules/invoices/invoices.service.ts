import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invoices } from './invoices.schema';
import { InvoicesDto } from '../dto/invoices.dto';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectModel(Invoices.name) private invoicesModel: Model<Invoices>,
  ) {}
  add(currentUser: any, body: InvoicesDto) {
    const data = Object.assign(body, { owner: currentUser._id });
    return this.invoicesModel.create(data);
  }

  findAll(currentUser: any) {
    return this.invoicesModel.find({ owner: currentUser._id });
  }

  findOne(id: string) {
    return this.invoicesModel.findOne({ _id: id });
  }

  update(id: string, body: InvoicesDto) {
    return this.invoicesModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }

  async delete(id: string): Promise<any> {
    return this.invoicesModel.findOneAndRemove({ _id: id });
  }
}
