const mongoose = require('mongoose');
const { Schema } = mongoose;

const IllnessSchema = new Schema({
    name: { type: String, required: true },
    symptoms: { type: Array, required: true },
    notes: { type: String, required: false },
    status: { type: Number, required: true }
});

module.exports = mongoose.model('Illness', IllnessSchema, 'illness');