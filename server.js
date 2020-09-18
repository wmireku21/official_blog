const express = require('express');
const mongoose = require('mongoose');

const subscribers = require('./routes/api/subscribers');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');

const config = require('config');

const app = express();

app.use(express.json());

const db = config.get('mongoURI');

mongoose
  .connect(db, {useNewUrlParser:true, useUnifiedTopology:true})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//routes

app.use('/api/subscribers', subscribers);
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
