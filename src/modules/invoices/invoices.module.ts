import { Module } from '@nestjs/common';
import { Invoices, InvoicesSchema } from './invoices.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoicesController } from './invoices.controller';
import { InvoicesService } from './invoices.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Invoices.name, schema: InvoicesSchema },
    ]),
  ],
  providers: [InvoicesService],
  controllers: [InvoicesController],
})
export class InvoicesModule {}
