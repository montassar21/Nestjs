import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as dotenv from 'dotenv';
import { resolve } from 'path';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as express from 'express';
import * as path from 'path';
import { ValidationPipe } from '@nestjs/common';
// import * as fastifyCors from 'fastify-cors';
import { json } from 'express';
import { hostname } from 'node:os';
// import { HttpExceptionFilter } from './modules/core/interceptors/http-exception.filter';
// import { TransformInterceptor } from './modules/core/interceptors/transform.interceptor';
dotenv.config({ path: resolve(__dirname, '../.env') });

async function bootstrap() {
  // we should find out why cors cannot seem  to work properly with fastify
  // const app = await NestFactory.create<NestFastifyApplication>(
  //   AppModule,
  //   new FastifyAdapter(),
  // );
  const app = await NestFactory.create(AppModule);

  // Serve static files from the 'public' folder
  app.use(express.static(path.join(__dirname, '..', 'public')));

  // Register the fastify-cors plugin
  // app.register(fastifyCors, {
  //   origin: true,
  //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
  //   allowedHeaders: ['Content-Type', 'Authorization'],
  //   credentials: true,
  // });
  /**
   * The ValidationPipe is a global pipe that will automatically validate all incoming requests against the specified validation rules.
   */

  app.use(helmet.contentSecurityPolicy());
  app.use(helmet.crossOriginEmbedderPolicy());
  app.use(helmet.crossOriginOpenerPolicy());
  app.use(helmet.crossOriginResourcePolicy());
  app.use(helmet.dnsPrefetchControl());
  // app.use(helmet.expectCt());
  app.use(helmet.frameguard());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.hsts());
  app.use(helmet.ieNoOpen());
  app.use(helmet.noSniff());
  app.use(helmet.originAgentCluster());
  app.use(helmet.permittedCrossDomainPolicies());
  app.use(helmet.referrerPolicy());
  app.use(helmet.xssFilter());
  app.use(json({ limit: '50mb' }));
  // apply auth middlware to every route and later on we can exlude some routes in app module
  // app.use(IsAuthenticated);

  // apply cors
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.setGlobalPrefix('v1/api');
  const config = new DocumentBuilder()
    .setTitle('Rental Vehicules App API documentations')
    .setDescription('For All developers out there')
    .setVersion('1.0')
    .addTag('v1/api')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'Token',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('v1/docs', app, document);

  // Serve static files from the "public" directory
  // app.useStaticAssets({
  //   root: join(__dirname, '..', 'public'),
  //   prefix: '/public/',
  // });
  await app.listen(process.env.PORT);
}
bootstrap();
