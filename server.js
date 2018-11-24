const express = require('express');
const mongoose = require('mongoose');
const body_parser = require('body-parser');
const path = require('path');

const config = require('./config/keys');
const Items = require('./routes/api/Items');

const app = express();
//body parser middleware
app.use(body_parser.json());

mongoose.connect(
  config.database,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

mongoose.connection.on('error', err => {
  console.log('Database error ' + err);
});

app.use('/api/items', Items);

// Serve static assets If in production
if (process.env.NODE_ENV === 'production') {
  // Set static assets root path
  app.use(express.static('client/build'));

  // Wildcard - Whatever path, this route will always run
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// const port = process.env.PORT || 5000;
const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
});
