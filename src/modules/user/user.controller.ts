import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('users')
  async getAllUser(@Res() res: any) {
    return await this.userService.getAllUser();
  }
}
