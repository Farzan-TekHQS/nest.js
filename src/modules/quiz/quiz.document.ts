import { Document, Schema } from 'mongoose';

export default interface QuizDocument extends Document {
    title: string,
    description: string
}
