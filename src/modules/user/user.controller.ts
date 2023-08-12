/* eslint-disable prettier/prettier */
import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
 
  }

