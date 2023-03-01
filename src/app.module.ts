import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { logEldModule } from './modules/logEld/logEld.module';
import { QuizModule } from './modules/quiz/quiz.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [QuizModule, ConfigModule.forRoot(), logEldModule, MongooseModule.forRoot(
    process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
