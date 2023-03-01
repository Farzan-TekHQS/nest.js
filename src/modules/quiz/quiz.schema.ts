import mongoose from 'mongoose';

export const QuizSchema = new mongoose.Schema({
  title: String,
  description: String
});