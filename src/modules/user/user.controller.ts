import { Body, Controller, Delete, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/')
  async register(@Body() reqBody) {
    const response = await this.userService.register(reqBody);
    return { data: response };
  }

  @Delete('/')
  async deleteAll() {
    const response = await this.userService.deleteAll();
    return { data: response };
  }
}
