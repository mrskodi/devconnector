const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser  = require('body-parser');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

// DB config
const db = require('./config/keys').mongoURI;

// configure body-parser middleware
app.use(express.urlencoded());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//connect to mongodb
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log(`Mongodb connected!`))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = '8001';

app.listen(port, () => console.log(`Server running on port ${port}`));