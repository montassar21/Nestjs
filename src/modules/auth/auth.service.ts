import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../user/user.schema';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { SignUpDto } from '.././dto/signUp.dto';
import { LoginDto } from '.././dto/login.dto';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}
  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { username, email, phone, password1, password2 } = signUpDto;
    const hashedPassword = await bcrypt.hash(password1, 8);
    const checkExistMail = await this.userModel.findOne({
      email,
    });
    if (checkExistMail) {
      throw new HttpException('Email already exist', HttpStatus.BAD_REQUEST);
    }
    const token = this.jwtService.sign({ email: email });

    const user = await this.userModel.create({
      username,
      email,
      phone,
      password: hashedPassword,
      token: token,
      image: '../../../../assets/images/images.png',
    });

    return { token: token };
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    const { email, password } = loginDto;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }
    const token = this.jwtService.sign({ email: user.email });
    user.token = token;
    await user.save();
    return { token: token };
  }
}
