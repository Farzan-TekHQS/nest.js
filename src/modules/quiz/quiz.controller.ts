import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from './dto/createQuiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService) { }

    @Post('/')
    async createQuiz(@Body() quizBody: CreateQuizDto) {
        const quiz = await this.quizService.createQuiz(quizBody.title, quizBody.description)
        return { data: quiz }
    }

    @Get('/')
    async getAllQuiz() {
        const allQuizes = await this.quizService.fetchAllQuiz()
        return { data: allQuizes }
    }

    @Get('/:id')
    async getQuizById(@Param() params) {
        const quiz = await this.quizService.fetchQuizById(params.id)
        return { data: quiz }
    }

    @Delete("/:id")
    async deleteQuizById(@Param() params) {
        const isDelete = await this.quizService.deleteQuizById(params.id)
        return { data: isDelete }
    }

    @Put("/:id")
    async updateQuiz(@Param() param, @Body() body) {
        const isUpdated = await this.quizService.updateQuiz(param.id, body.title, body.description)
        return { data: isUpdated }
    }
}
