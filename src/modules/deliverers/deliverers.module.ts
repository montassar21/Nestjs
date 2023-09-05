/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DelivererService } from './deliverers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Deliverer, DelivererSchema } from './deliverers.schema';
import { DelivererController } from './deliverers.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Deliverer.name, schema: DelivererSchema }]),
  ],
  providers: [DelivererService],
  controllers: [DelivererController],
})
export class DelivererModule {}
