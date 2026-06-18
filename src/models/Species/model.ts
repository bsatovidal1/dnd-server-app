import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SpeciesSchema = new Schema({
  _id: ObjectId,
  name: { type: String, required: true },
  size: String,
  speed: Number,
  description: String,
  traits: [String],
  imageUrl: String,
});

const Species = mongoose.model('Species', SpeciesSchema);

export default Species;
