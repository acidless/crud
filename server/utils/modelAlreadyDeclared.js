import mongoose from 'mongoose';

export default function modelAlreadyDeclared(modelName) {
  try {
    mongoose.model(modelName);
    return true;
  } catch (e) {
    return false;
  }
}
