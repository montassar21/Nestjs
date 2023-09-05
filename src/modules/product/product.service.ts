import {
  BadRequestException,
  Injectable,
  NotFoundException,
  Req,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, ObjectId } from 'mongoose';
import { Product } from './product.schema';
import { ProductDto } from '../dto/product.dto';
import { Observable, of } from 'rxjs';
import { User } from '../user/user.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: mongoose.Model<Product>,
  ) {}
  add(currentUser: any, body: ProductDto): Promise<Product> {
    body._id = new mongoose.Types.ObjectId(); // Create a new ObjectId
    const data = Object.assign(body, { owner: currentUser._id });
    return this.productModel.create(data);
  }

  async findAll(currentUser: any): Promise<Product[]> {
    const products = await this.productModel.find(currentUser._id);
    return products;
  }

  async findOne(id: string): Promise<Product> {
    const isValidId = mongoose.isValidObjectId(id);
    // if (!isValidId) {
    //   throw new BadRequestException('Please Enter Correct ID !');
    // }
    const product = await this.productModel.findById(id);

    if (!product) {
      throw new NotFoundException('Product Not Found !');
    }

    return product;
  }

  update(id: string, body: ProductDto) {
    return this.productModel.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
  }

  async delete(id: string): Promise<Product> {
    return await this.productModel.findByIdAndDelete(id);
  }
  async uploadImage(file: any) {
    return of({ imageName: file.filename });
  }
}
