import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FcmController } from './fcm.controller';
import { FcmService } from './fcm.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [FcmController],
  providers: [FcmService],
})
export class FcmModule {}
