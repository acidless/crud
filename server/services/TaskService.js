import Task from '../models/task';

class TaskService {
  async getAll() {
    return Task.find().select('-description').sort({ createdAt: -1 });
  }

  async getOne(id) {
    return Task.findById(id);
  }

  async create(task) {
    return Task.create(task);
  }

  async update(id, data) {
    return Task.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  }

  async delete(id) {
    return Task.findByIdAndDelete(id);
  }
}

export default TaskService;
