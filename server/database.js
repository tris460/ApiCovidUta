const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/covidUta';
mongoose.connect(URI,{ useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;