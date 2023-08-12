/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from '../dto/product.dto';
import { User } from '../user/user.schema';
import { Observable , of } from 'rxjs';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { now } from 'mongoose';
import { Response } from 'express';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('')
  add(@Req() req: any, @Body() body: ProductDto) {
    return this.productService.add(req.user, body);
  }

  @Get('')
  findAll(@Req() req: any) {
    return this.productService.findAll(req.user);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: ProductDto) {
    return this.productService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.productService.delete(id);
  }

  // @Post('upload')
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: './uploads/productsImages',
  //       filename: (req, file, cb) => {
  //         const filename: string = path.parse(file.originalname).name.replace(/\s/g, '');
  //         const extension: string = path.parse(file.originalname).ext;

  //         cb(null, `${filename}${extension}`);
  //       },
  //     }),
  //   }),
  // )
  // uploadImage(@UploadedFile() file) {
  //   this.productService.uploadImage(file);

  // }

  // @Get('photos/:filename')
  //  async getPicture(@Param('filename') filename ,@Res() res:Response){
  //   this.productService.getPicture(filename,res);
  // }
}
