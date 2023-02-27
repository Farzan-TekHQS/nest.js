import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from './dto/createQuiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService) { }

    @Get('/')
    getAllQuiz() {
        return this.quizService.getAllQuiz()
    }

    @Post('/')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    createQuiz(@Body() quizBody: CreateQuizDto) {
        return { data: quizBody }
    }
}
