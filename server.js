const express = require('express');
const mongoose = require('mongoose');
const body_parser = require('body-parser');

const config = require('./config/keys');
const Items = require('./routes/api/Items');

const app = express();
//body parser middleware
app.use(body_parser.json());

mongoose.connect(config.database,{useNewUrlParser:true});
mongoose.Promise = global.Promise;

mongoose.connection.on('error', err => {
  console.log('Database error ' + err);
});

app.use('/api/items', Items);

// const port = process.env.PORT || 5000;
const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
});
