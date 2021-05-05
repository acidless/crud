import mongoose from 'mongoose';

function connect() {
  mongoose
    .connect(process.env.MONGO_DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .catch((e) => {
      console.error(e);
    });
}

export default { connect };
