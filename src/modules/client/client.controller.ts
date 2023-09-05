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
import { ClientService } from './client.service';
import { ClientDto } from '../dto/client.dto';
import { Client } from './client.schema';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('')
  async add(@Req() req: any, @Body() body: ClientDto) {
    return this.clientService.add(req.user, body);
  }

  @Get('')
  findAll(@Req() req: any) {
    return this.clientService.findAll(req.user);
  }

  @Get(':id')
  async findOne(@Req() req: any, @Param('id') id: string) {
    return this.clientService.findOne(req.user, id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: ClientDto) {
    return this.clientService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.clientService.delete(id);
  }
}
