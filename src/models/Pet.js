import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  species:  { type: String, required: true },
  breed:    { type: String },
  age:      { type: Number },
  adopted:  { type: Boolean, default: false }
}, {
  timestamps: true
});

const PetModel = mongoose.model('Pet', petSchema);
export default PetModel;
