import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { logEldModule } from './modules/logEld/logEld.module';
import { QuizModule } from './modules/quiz/quiz.module';

@Module({
  imports: [QuizModule, logEldModule, MongooseModule.forRoot(
    "mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
