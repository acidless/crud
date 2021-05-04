import mongoose from 'mongoose';
import config from './config.json';

function connect() {
  mongoose
    .connect(config.mongoConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .catch((e) => {
      console.error(e);
      process.exit(1);
    });
}

export default { connect };
