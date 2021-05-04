import express from 'express';
import TaskController from '../controllers/TaskController';

const router = express.Router();
const taksController = new TaskController();

router
  .route('/tasks')
  .get(taksController.getAll())
  .post(taksController.create());

router
  .route('/tasks/:id')
  .get(taksController.getOne())
  .patch(taksController.update())
  .delete(taksController.delete());

export default router;
