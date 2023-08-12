import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductModule } from './modules/product/product.module';
import { ClientModule } from './modules/client/client.module';
import { OrderModule } from './modules/order/order.module';
import { PurchasesModule } from './modules/purchases/purchases.module';
import { InvoicesModule } from './modules/invoices/invoices.module';
import { MiddlewareConsumer } from '@nestjs/common/interfaces';
import { IsAuthenticated } from './core/middleware/isAuthenticated';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    UserModule,
    AuthModule,
    ProductModule,
    ClientModule,
    OrderModule,
    PurchasesModule,
    InvoicesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IsAuthenticated)
      .forRoutes('users')
      .apply(IsAuthenticated)
      .forRoutes('products')
      .apply(IsAuthenticated)
      .forRoutes('orders');
  }
}
