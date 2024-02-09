import { Body, Controller, Get, Post } from "@nestjs/common";
import { Chat } from "./chats.interface";
import { ChatsService } from "./chats.service";
import { CreateChatDto } from "./create-chat.dto";

@Controller('chats')
export class ChatController {
  
  constructor (private chatService: ChatsService) { }

  @Post()
  create(@Body() createChatDto: CreateChatDto) 
  {
    return this.chatService.create(createChatDto)
  }

  @Get()
  async fetchAll(): Promise<Chat[]> 
  {
    return this.chatService.fetchAll();
  }
}