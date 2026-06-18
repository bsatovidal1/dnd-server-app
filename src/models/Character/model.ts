import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CharacterSchema = new Schema({
  _id: ObjectId,
  name: { type: String, required: true },
  level: { type: Number, required: true },
  species: { type: String, ref: 'Species' },
  job_class: { type: String, ref: 'JobClass' },
  description: String,
  imageUrl: String,
});

const Character = mongoose.model('Character', CharacterSchema);

export default Character;
