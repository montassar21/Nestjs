/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Suppliers, SuppliersSchema } from './suppliers.schema';
import { SuppliersController } from './suppliers.controller';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Suppliers.name, schema: SuppliersSchema },
    ]),
  ],
  controllers: [SuppliersController],
  providers: [SuppliersService],
})
export class SuppliersModule {}
