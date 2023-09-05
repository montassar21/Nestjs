/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { User } from '../user/user.schema';
import { mock } from 'node:test';
import { getModelToken } from '@nestjs/mongoose';
import { Product } from './product.schema';
import { reverse } from 'dns';

describe('ProductController', () => {
  let productController: ProductController;
    let productService: ProductService  ;
  
  beforeEach(async () => {
     

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
         ProductService,
           {
          provide: getModelToken(Product.name),
          useValue: null,
        
        },
      ],
    }).compile();

    productController = module.get<ProductController>(ProductController);
    productService = module.get<ProductService>(ProductService);

  });

   it('should be defined', () => {
    expect(productController).toBeDefined();
   });
  
  
  

  // Write similar test cases for other controller methods
  // describe('update', () => { ... });
  // describe('delete', () => { ... });
});