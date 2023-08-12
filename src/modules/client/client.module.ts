import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Client, ClientSchema } from './client.schema';
import { ClientController } from './client.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
  ],
  providers: [ClientService],
  controllers: [ClientController],
})
export class ClientModule {}
