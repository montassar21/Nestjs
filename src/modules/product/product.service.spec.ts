/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { User } from '../user/user.schema';
import { mock } from 'node:test';
import { getModelToken } from '@nestjs/mongoose';
import { Product } from './product.schema';
import { reverse } from 'dns';
import mongoose, { Model } from 'mongoose';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { ProductDto } from '../dto/product.dto';

describe('ProductService', () => {
    let productService: ProductService  ;
    let model: Model<Product>
    
       const mockProduct ={
        _id:"1096447486426100753881841096911721020590",
        code:"D2145",
        image:"delli7.jpg",
        name:"DELL i7",
        brand:"DELL",
        category:"Electronic",
        cost:2200,
        price:2500,
        quantity:10,
        unit:"DT",
           alert_quantity: 2,  
    };
    
       const mockUser = {
          _id:'64e7987d306d5ef861b17662',
          username:'Montassar Brahem',
          email:"brahemmonta252@gmail.com",
          phone:"53224190",
          password:"$2a$08$IhkX6wns9kHNq86CSuFn8e5o8QUMYk.QYdczOM0XsW3LSIfSxAqAO",
          image:"../../../../assets/images/images.png",
                  type: "admin",
    };
    
    const mockProductService = {
        findById: jest.fn(),
        find: jest.fn(),
        create: jest.fn(),
        findByIdAndUpdate: jest.fn(),
        findByIdAndDelete: jest.fn(),
        
    }

  beforeEach(async () => {
     

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
         ProductService,
           {
          provide: getModelToken(Product.name),
          useValue: mockProductService,
        
        },
      ],
    }).compile();

      productService = module.get<ProductService>(ProductService);
      model = module.get<Model<Product>>(getModelToken(Product.name));

  });

   it('should be defined', () => {
    expect(productService).toBeDefined();
   });
  
   describe('findOne', () => {
    it('should return a product by ID', async () => {
         
        jest.spyOn(model, 'findById').mockResolvedValue(mockProduct);
        const result = await productService.findOne(mockProduct._id);
        expect(model.findById).toHaveBeenCalledWith(mockProduct._id);
        expect(result).toEqual(mockProduct);

    }); 
    //    it('Should throw BadRequestException if invalid ID is provided', async () => {
           
    //        const id = 'invalid-id';
    //        const isValidObjectIDMock = jest.spyOn(mongoose,'isValidObjectId').mockReturnValue(false);
    //        await expect(productService.findOne(id)).rejects.toThrow(BadRequestException);
    //        expect(isValidObjectIDMock).toHaveBeenCalledWith(id);
    //        isValidObjectIDMock.mockRestore();
       
    //    })  
       it('Should throw NotfoundExpeption if Product  is not found', async () => {
                  
           jest.spyOn(model, 'findById').mockResolvedValue(null);
           await expect(productService.findOne(mockProduct._id)).rejects.toThrow(NotFoundException);
           expect(model.findById).toHaveBeenCalledWith(mockProduct._id);
       })
              
    
   });
    
    // describe('findAll', () => {
    //     it('should return all products by user', async () => {
    //           const user = {
    //       _id:'64e7987d306d5ef861b17662',
    //       username:'Montassar Brahem',
    //       email:"brahemmonta252@gmail.com",
    //       phone:"53224190",
    //       password:"$2a$08$IhkX6wns9kHNq86CSuFn8e5o8QUMYk.QYdczOM0XsW3LSIfSxAqAO",
    //       image:"../../../../assets/images/images.png",
    //               type: "admin",
    //         };
            
    //         jest.spyOn(model, 'find').mockResolvedValue([mockProduct])
           
            
    //         const result = await productService.findAll(user);
            
    //         expect(model.find).toHaveBeenCalledWith(user);

    //         expect(result).toEqual(mockProduct)
        
    //     })
    // })

  
  describe('create', () => {
          it('Should add and return a product', async () => {
              const newProduct = {
                  code: "S21645",
                  image: "samsung.jpg",
                  name: "Samsung S21",
                  brand: "Samsung",
                  category: "Phone",
                  cost: 2100,
                  price: 2600,
                  quantity: 10,
                  unit: "DT",
                  alert_quantity: 2,
                  expiration_date: '',
                  owner:'',
              };

              jest.spyOn(model, 'create').mockImplementationOnce(() => Promise.resolve(mockProduct as any));

              const result = await productService.add(mockUser as any, newProduct as any);

              expect(result).toEqual(mockProduct)
        })
    });
     describe('updateById', () => {
    it('should update and return a product', async () => {
      const updatedProduct = { ...mockProduct, name: 'Updated name' };
      const product = { name: 'Updated name' };

      jest.spyOn(model, 'findByIdAndUpdate').mockResolvedValue(updatedProduct);

      const result = await productService.update(mockProduct._id, product as any);

      expect(model.findByIdAndUpdate).toHaveBeenCalledWith(mockProduct._id, product, {
        new: true,
        runValidators: true,
      });

      expect(result.name).toEqual(product.name);
    });
  });

      describe('deleteById', () => {
    it('should delete and return a product', async () => {
      jest.spyOn(model, 'findByIdAndDelete').mockResolvedValue(mockProduct);

      const result = await productService.delete(mockProduct._id);

      expect(model.findByIdAndDelete).toHaveBeenCalledWith(mockProduct._id);

      expect(result).toEqual(mockProduct);
    });
      });
    
  // Write similar test cases for other controller methods
  // describe('update', () => { ... });
  // describe('delete', () => { ... });
});