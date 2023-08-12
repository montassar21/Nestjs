/* eslint-disable prettier/prettier */
import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { jwtConstants } from '../constants/constants';
import { UserService } from 'src/modules/user/user.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class IsAuthenticated implements NestMiddleware {

  constructor(private userService: UserService,
    private jwtService:JwtService
    ) {}

  async use(req: any, res: Response, next: NextFunction) {
    try {
      if (
        req.headers.authorization ||
        (req.query && req.query.authorizationtoken)
      ) {
        const token =
          req.headers.authorization.split(' ')[1] ||
          req.query.authorizationtoken.toString().split(' ')[1];
        const access_token = this.jwtService.verify(
          token,
          {secret: jwtConstants.secret},
        );
        const user = await this.userService.userModel.findOne({
          email: access_token.email,
        });
        if (!user) {
          throw new UnauthorizedException('You are not authenticated');
        }
        req.user = user;
        next();
      } else {
        throw new UnauthorizedException('You are not authenticated');
      }
    } catch (e) {
      next(e);
    }
  }
}
