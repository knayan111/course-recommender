const express = require('express');
const mongoose = require('mongoose');

const app = express();

const Topic_PriceSchema = new mongoose.Schema({
  name : String,
  price : Number
});

app.get('/', (req, res) => {
  async function getTopicPrice(topic) {
    const collection = "TopicPrice";
    let Query;
    try {
      Query = mongoose.model(collection);
    } catch (error) {
      Query = mongoose.model(collection, Topic_PriceSchema, collection);
    }
    const info = (await Query.find({"name" : topic}, {"_id" : 0, "price": 1}))[0].price;
    return info;
  }

  
});

module.exports = app;