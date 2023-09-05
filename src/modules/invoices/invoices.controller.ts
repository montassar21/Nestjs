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
import { InvoicesService } from './invoices.service';
import { InvoicesDto } from '../dto/invoices.dto';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Post('')
  add(@Req() req: any, @Body() body: InvoicesDto) {
    return this.invoicesService.add(req.user, body);
  }

  @Get('')
  findAll(@Req() req: any) {
    return this.invoicesService.findAll(req.user);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.invoicesService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: InvoicesDto) {
    return this.invoicesService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.invoicesService.delete(id);
  }
}
