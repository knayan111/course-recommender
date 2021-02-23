const express = require('express');
const mongoose = require('mongoose');
const subjects = require('./routes/subjects');
const topics = require('./routes/topics');
const test_score = require('./routes/test_score');

const app = express();
const port = 3000;

app.use('/subjects', subjects);
app.use('/topics', topics);
app.use('/test_score', test_score);

mongoose.connect('mongodb+srv://root:root@gateashramcluster-ddwdn.mongodb.net/course-recommender', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(port, () => console.log(`App listening on port ${port}!`));