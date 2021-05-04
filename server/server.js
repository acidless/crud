import express from 'express';
import db from './db';
import errorHandler from './utils/errorHandler';
import AppError from './utils/AppError';

import taskRoutes from './routes/taskRoutes';

db.connect();

const app = express();

app.use(express.json());
app.use(taskRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(errorHandler);

export default app;
