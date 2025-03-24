const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  age: Number,
}, { timestamps: true });

// Export the model
module.exports = mongoose.model('User', UserSchema);

