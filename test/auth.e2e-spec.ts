/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import mongoose from 'mongoose';

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
    
    beforeAll(() => {
        mongoose.connect(process.env.DB_URI);
    })
    
    afterAll(() => mongoose.disconnect());
    
    const user = {
        username: "Monta",
        email: "MontaBr@gmail.com",
        password: "12345678",
        phone:"53224190"
  }
  it('(POST) - Register a new user ', () => {
    return request(app.getHttpServer())
      .post('/v1/api/auth/signUp ')
      .send(user)
      .expect(201)
        .then((res) => { 
            expect(res.body.token).toBeDefined();
      });
  });
});
