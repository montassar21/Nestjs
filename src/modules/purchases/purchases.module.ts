import { Module } from '@nestjs/common';
import { PurchasesController } from './purchases.controller';
import { PurchasesService } from './purchases.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Purchase, PurchaseSchema } from './purchases.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Purchase.name, schema: PurchaseSchema },
    ]),
  ],
  providers: [PurchasesService],
  controllers: [PurchasesController],
})
export class PurchasesModule {}
