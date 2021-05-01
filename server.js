const express = require('express');
const mongoose = require('mongoose');
const app = express();

// DB config
const db = require('./config/keys').mongoURI;

//connect to mongodb
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log(`Mongodb connected!`))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = '8001';

app.listen(port, () => console.log(`Server running on port ${port}`));