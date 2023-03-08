import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import UserDocument from './mongodb/user.document';
import { ConfigModule } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private user: Model<UserDocument>,
  ) {}

  register = async (user) => {
    return await this.user.create(user);
  };

  deleteAll = async () => {
    return await this.user.deleteMany({
      email: 'email@gmail.com',
    });
  };
}
