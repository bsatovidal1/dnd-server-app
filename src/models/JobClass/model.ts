import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const JobClassSchema = new Schema({
  _id: ObjectId,
  name: { type: String, required: true },
  description: String,
});

const JobClass = mongoose.model('JobClass', JobClassSchema);

export default JobClass;
