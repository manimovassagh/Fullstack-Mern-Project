const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// use body Parse as middleware

app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;
// connect to mongoodb 
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port on ${port}`));

