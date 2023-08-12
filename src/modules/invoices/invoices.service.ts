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
  add(body: InvoicesDto) {
    return this.invoicesModel.create(body);
  }

  findAll() {
    return this.invoicesModel.find();
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
