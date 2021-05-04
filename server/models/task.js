import mongoose from 'mongoose';
import modelAlreadyDeclared from '../utils/modelAlreadyDeclared';
import unselectVersionKey from '../models/plugins/unselectVersionKey';

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 3,
    maxlength: 32,
    required: true,
  },

  description: {
    type: String,
    minlength: 5,
    maxlength: 1000,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

TaskSchema.plugin(unselectVersionKey);

let Task;
if (!modelAlreadyDeclared('Task')) {
  Task = mongoose.model('Task', TaskSchema);
}

export default Task;
