import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PurchasesDto } from '../dto/purchases.dto';
import { Purchase } from '../purchases/purchases.schema';

@Injectable()
export class PurchasesService {
  constructor(
    @InjectModel(Purchase.name) private purchasesModel: Model<Purchase>,
  ) {}
  add(body: PurchasesDto) {
    return this.purchasesModel.create(body);
  }

  findAll() {
    return this.purchasesModel.find();
  }

  findOne(id: string) {
    return this.purchasesModel.findOne({ _id: id });
  }

  update(id: string, body: PurchasesDto) {
    return this.purchasesModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }

  async delete(id: string): Promise<any> {
    return this.purchasesModel.findOneAndRemove({ _id: id });
  }
}
