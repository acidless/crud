export default function unselectVersionKey(schema) {
  const options = { versionKey: false };

  schema.options.toObject = options;
  schema.options.toJSON = options;
}
