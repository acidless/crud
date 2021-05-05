import TaskService from '../services/TaskService';
import catchAsync from '../utils/catchAsync';

class TaskController {
  constructor() {
    this.tasksService = new TaskService();
  }

  getAll() {
    return catchAsync(async (req, res) => {
      const data = await this.tasksService.getAll();

      res.json({ success: true, data });
    });
  }

  getOne() {
    return catchAsync(async (req, res) => {
      const data = await this.tasksService.getOne(req.params.id);

      res.json({ success: true, data });
    });
  }

  create() {
    return catchAsync(async (req, res) => {
      const data = await this.tasksService.create(req.body);

      res.status(201).json({
        sucess: true,
        data: data,
      });
    });
  }

  update() {
    return catchAsync(async (req, res) => {
      const data = await this.tasksService.update(req.params.id, req.body);

      res.status(200).json({
        sucess: true,
        data,
      });
    });
  }

  delete() {
    return catchAsync(async (req, res) => {
      await this.tasksService.delete(req.params.id);

      res.status(204).json();
    });
  }
}

export default TaskController;
