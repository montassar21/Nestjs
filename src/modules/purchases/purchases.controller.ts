import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PurchasesDto } from '../dto/purchases.dto';
import { PurchasesService } from '../purchases/purchases.service';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Post('')
  add(@Body() body: PurchasesDto) {
    return this.purchasesService.add(body);
  }

  @Get('')
  findAll() {
    return this.purchasesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.purchasesService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: PurchasesDto) {
    return this.purchasesService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.purchasesService.delete(id);
  }
}
