import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class UserService {
  async register(registerUserDto: RegisterUserDto) {
    return registerUserDto;
  }
}
