import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FcmService } from './fcm.service';

@Controller('notification')
export class FcmController {
  constructor(private fcmService: FcmService) {}

  @Get('/test')
  async test() {
    return { message: 'Working' };
  }

  @Get('/')
  async pushNotification(@Res() res) {
    const response = await this.fcmService.sendNotification();
    return res.send(response);
  }
}
