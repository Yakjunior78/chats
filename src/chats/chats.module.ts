import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatController } from './chats.controller';
import { ChatsService } from './chats.service';
import { Chat, ChatSchema } from './chats.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Chat.name, schema: ChatSchema }
    ])
  ],
  controllers: [ChatController],
  providers: [ChatsService],
})
export class ChatsModule {}
