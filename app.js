const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

const subjects = require('./routes/subjects');
const topics = require('./routes/topics');
const test_score = require('./routes/test_score');
const recommend = require('./routes/recommend');

mongoose.connect('mongodb+srv://root:root@gateashramcluster-ddwdn.mongodb.net/course-recommender',
{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("It's working! Backend with frontend.");
});

app.use('/subjects', subjects);
app.use('/topics', topics);
app.use('/test_score', test_score);
app.use('/recommend', recommend);

app.listen(port, () => console.log(`App listening on port ${port}!`));