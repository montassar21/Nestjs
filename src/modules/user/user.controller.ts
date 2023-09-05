/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
   
  @Get('')
  findOne(@Req() req: any) {
    return this.userService.findOne(req.user.email);
  }

  @Post('/updatePassword')
  updateUserPassword(@Body() body: any) {
    this.userService.updatePassword(body._id,body)
    
  }

    @Post('/updateInfo')
  updateInfo(@Body() body: any) {
    this.userService.updateInfo(body._id,body)
    
  }
  @Post('/updateOneImage')
  updateImage(@Body() body: any) {
    this.userService.updateImage(body._id,body)
    
  }
  }

