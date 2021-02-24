const express = require('express');
const mongoose = require('mongoose');

const app = express();

const Test_ScoreSchema = new mongoose.Schema({
  _id : Number,
  userId : Number,
  total : Number,
  obtained : Number,
  topicScore : Array
});

app.get('/:id', (req, res) => {
  async function getTest_Score(){
    const id = Number(req.params.id), collection = "Test_Score";
    let Query;
    try {
      Query = mongoose.model(collection);
    } catch (error) {
      Query = mongoose.model(collection, Test_ScoreSchema, collection);
    }
    const info = await Query.find({"_id" : id});
    res.send(info);
  }

  getTest_Score();
});

module.exports = app;