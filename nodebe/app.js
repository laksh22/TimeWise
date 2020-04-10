
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const http = require("http");

const mainRoutes =  require('./server/routes/main');

dotenv.config();

// set up dependencies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const {
  NODE_ENV
} = process.env;


// Deployed DB Uri
var url = `mongodb://lekleklek:password123@ds155934.mlab.com:55934/heroku_xjsknll9`;

//  Connect to mondoDB
mongoose.connect(url) 
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
    console.log(error);
  });

const port = process.env.PORT || 1000;

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello New world!',
  });
});



app.use('/api/', mainRoutes);

app.listen(port, () => {
  console.log(`Our server is running on port ${port}`);

});


module.exports = app
