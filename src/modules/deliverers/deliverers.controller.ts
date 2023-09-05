/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { DelivererService } from './deliverers.service';
import { DelivererDto } from '../dto/deliverer.dto';
import { Deliverer } from './deliverers.schema';

@Controller('deliverers')
export class DelivererController {
  constructor(private readonly delivererService: DelivererService) {}

  @Post('')
  async add(@Req() req: any, @Body() body: DelivererDto) {
    return this.delivererService.add(req.user, body);
  }

  @Get('')
  findAll(@Req() req: any) {
    return this.delivererService.findAll(req.user);
  }

  @Get(':id')
  async findOne(@Req() req: any, @Param('id') id: string) {
    return this.delivererService.findOne(req.user, id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: DelivererDto) {
    return this.delivererService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.delivererService.delete(id);
  }
}
