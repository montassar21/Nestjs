/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersDto } from '../dto/suppliers.dto';
import { User } from '../user/user.schema';
import { Observable , of } from 'rxjs';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { now } from 'mongoose';
import { Response } from 'express';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Post('')
  add(@Req() req: any, @Body() body: SuppliersDto) {
    return this.suppliersService.add(req.user, body);
  }

  @Get('')
  findAll(@Req() req: any) {
    return this.suppliersService.findAll(req.user);
  }

  @Get(':id')
  async findOne(@Req() req: any,@Param('id') id: string) {
    return this.suppliersService.findOne(req.user,id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: SuppliersDto) {
    return this.suppliersService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.suppliersService.delete(id);
  }



}
