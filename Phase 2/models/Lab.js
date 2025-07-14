const mongoose = require('mongoose');

const labSchema = new mongoose.Schema({
  name: { type: String, enum: ['A', 'B', 'C'], required: true, unique: true },
  capacity: { type: Number, required: true },
  description: String
});

module.exports = mongoose.model('Lab', labSchema);
