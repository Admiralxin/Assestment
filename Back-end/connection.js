const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://FoneApi:tSU4XKeWTP99pbC4@cluster0.3zvoruv.mongodb.net/test`)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
7