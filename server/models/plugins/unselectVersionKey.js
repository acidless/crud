export default function unselectVersionKey(schema) {
  schema.pre(/^find/, function (next) {
    this.select('-__v');
    next();
  });
}
