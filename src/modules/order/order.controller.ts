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
import { OrderService } from './order.service';
import { OrderDto } from '../dto/order.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('')
  add(@Req() req: any, @Body() body: OrderDto) {
    console.log(req.user);
    return this.orderService.add(req.user, body);
  }

  @Get('')
  findAll(@Req() req: any) {
    console.log(req.user);
    return this.orderService.findAll(req.user);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Put(':id')
  async Update(@Param('id') id: string, @Body() body: OrderDto) {
    return this.orderService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.orderService.delete(id);
  }
}
