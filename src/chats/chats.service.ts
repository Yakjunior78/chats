import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat } from './chats.schema';
import { CreateChatDto } from './create-chat.dto';

@Injectable()
export class ChatsService {
  
  constructor(
    @InjectModel(Chat.name) private chatModel: Model<Chat>
  ){}

  async create(createChatDto: CreateChatDto): Promise<Chat> {
    console.log('FORMDATA : ', createChatDto);
    return await this.chatModel.create(createChatDto)
  }

  async fetchAll(): Promise<Chat[]> {
    return await this.chatModel.find().exec();
  }
}