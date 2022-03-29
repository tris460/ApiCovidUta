const { Number } = require('mongoose');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    symptoms: { type: Array, required: true },
    notes: { type: String, required: false },
    status: { type: Number, required: true }
});

module.exports = mongoose.model('Users', UserSchema);