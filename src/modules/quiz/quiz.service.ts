import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import QuizDocument from "./quiz.document";
import { Model, Schema } from 'mongoose';


@Injectable()
export class QuizService {
    constructor(
        @InjectModel("Quiz")
        private readonly quizModel: Model<QuizDocument>,
    ) { }

    createQuiz = async (title: string, description: string): Promise<QuizDocument> => {
        return await this.quizModel.create({
            title: title,
            description: description
        });
    }

    fetchAllQuiz = async () => {
        return await this.quizModel.find();
    }

    fetchQuizById = async (id: number) => {
        return await this.quizModel.findById({
            _id: id
        })
    }

    deleteQuizById = async (id: number) => {
        return await this.quizModel.deleteOne({
            _id: id
        })
    }

    updateQuiz = async (id: number, title: string, description: string) => {
        return await this.quizModel.updateOne({
            _id: id
        }, {
            title: title,
            description: description
        })
    }


}