import mongoose from 'mongoose';
import unselectVersionKey from '../models/plugins/unselectVersionKey';

const TaskSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: { createdAt: 'createdAt' } }
);

TaskSchema.plugin(unselectVersionKey);

const Task = mongoose.models.Task || mongoose.model('Task', TaskSchema);

export default Task;
