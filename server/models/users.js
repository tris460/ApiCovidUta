const { Number } = require('mongoose');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    id: { type: Number, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    secondLastName: {type: String, required: false },
    age: { type: Number, required: true },
    allergies: { type: Array, required: false },
    otherIllnesses: { type: Array, required: false },
    career: { type: String, required: true },
    degree: { type: Number, required: true },
    group: { type: CharacterData, required: true }
});

module.exports = mongoose.model('Users', UserSchema);