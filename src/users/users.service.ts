import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.schema';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOne(username: string, password: string): Promise<User | undefined> {
    return this.userModel.findOne({ username: username }).exec();
  }

  async create(userDto: CreateUserDto): Promise<User> {
    return this.userModel.create(userDto);
  }
}

