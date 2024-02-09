import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/create-user.dto';
import { User } from 'src/users/user.schema';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(username: string, pass: string): Promise<User> {
    return await this.usersService.findOne(username, pass);
  }

  async signUp(userDto: CreateUserDto): Promise<User> {
    return await this.usersService.create(userDto);
  }
}