import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Product } from './product.schema';
import { ProductDto } from '../dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}
  add(currentUser: any, body: ProductDto) {
    const data = Object.assign(body, { owner: currentUser._id });
    return this.productModel.create(data);
  }

  findAll(currentUser: any) {
    return this.productModel.find({ owner: currentUser._id });
  }

  findOne(id: string) {
    return this.productModel.findOne({ _id: id });
  }

  update(id: string, body: ProductDto) {
    return this.productModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }

  delete(id: string): Promise<any> {
    return this.productModel.findOneAndRemove({ _id: id });
  }
}
