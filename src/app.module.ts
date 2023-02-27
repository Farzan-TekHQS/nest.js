import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';

@Module({
  imports: [QuizModule, MongooseModule.forRoot('mongodb+srv://Farzan:<Farzan>@cluster0.g01eb7r.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
