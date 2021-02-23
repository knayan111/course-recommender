const express = require('express');
const mongoose = require('mongoose');

const app = express();

const Subject_TopicSchema = new mongoose.Schema({
  subject : String,
  route : String,
  topic : Array
});

app.get('/:subject', (req, res) => {
  async function getTopics(){
    const subject = req.params.subject, collection = "Subject_Topic";
    let Query;
    try {
      Query = mongoose.model(collection);
    } catch (error) {
      Query = mongoose.model(collection, Subject_TopicSchema, collection);
    }
    const info = (await Query.find({"route" : subject}, {"_id" : 0, "topic" : 1}))[0].topic;
    res.send(info);
  }

  getTopics();
});

module.exports = app;