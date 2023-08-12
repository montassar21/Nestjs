import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientDto } from '../dto/client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('')
  Add(@Body() body: ClientDto) {
    return this.clientService.Add(body);
  }

  @Get('')
  FindAll() {
    return this.clientService.FindAll();
  }

  @Get(':id')
  async FindOne(@Param('id') id: string) {
    return this.clientService.FindOne(id);
  }

  @Put(':id')
  async Update(@Param('id') id: string, @Body() body: ClientDto) {
    return this.clientService.Update(id, body);
  }

  @Delete(':id')
  async Delete(@Param('id') id: string): Promise<any> {
    return this.clientService.Delete(id);
  }
}
