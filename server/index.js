const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const { mongoose } = require('./database');

// Settings
app.set('port', 3000);

//Middlewares
app.use(morgan('dev')); 
app.use(express.json());
app.use(cors({origin: 'http://localhost:8100'}));

//Routes

app.use('/api/users',require('./routes/users.routes'));
app.use('/api/contacts',require('./routes/contacts.routes'));

//Starting the server
app.listen(app.get('port'), ()=>{
    console.log("Server on port "+app.get('port'));
});