import { Document, Schema } from 'mongoose';

export default interface UserDocument extends Document {
  name: String;
  email: String;
  password: String;
}
