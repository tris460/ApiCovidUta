const mongoose = require('mongoose');
const { Schema } = mongoose;

const IllnessSchema = new Schema({
    idUser: { type: String, required: true },
    strDate: { type: Date, required: true },
    strName: { type: String, required: true },
    arrSymptoms: { type: Array, required: true },
    intStatus: { type: Number, required: true },
    strNotes: { type: String, required: false }
});

module.exports = mongoose.model('Illness', IllnessSchema, 'illness');