const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    _id: { type: Number, required: true },
    strRol: { type: String, required: true },
    strEmail: { type: String, required: true },
    strPassword: { type: String, required: true },
    strName: { type: String, required: true },
    strLastName: { type: String, required: true },
    strSecondLastName: {type: String, required: false },
    intAge: { type: Number, required: true },
    arrAllergies: { type: Array, required: false },
    arrPreviousIllnesses: { type: Array, required: false },
    strCareer: { type: String, required: false },
    intGrade: { type: Number, required: false },
    chaGroup: { type: String, required: false }
});

module.exports = mongoose.model('Users', UserSchema, 'user');