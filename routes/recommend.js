const express = require('express');
const mongoose = require('mongoose');
const fetch = require('node-fetch');

const app = express();

const Topic_PriceSchema = new mongoose.Schema({
  name : String,
  price : Number
});

app.get('/:id', (req, res) => {
  async function getRecommendation() {
    const id = req.params.id;
    let url = "http://127.0.0.1:3000/test_score/" + id, settings = { method: "Get" }, result = [];

    await fetch(url, settings)
      .then(res2 => res2.json())
      .then((json) => {
        result = json[0].topicScore;
      });
    
    const collection = "Topic_Price";
    let Query;
    try {
      Query = mongoose.model(collection);
    } catch (error) {
      Query = mongoose.model(collection, Topic_PriceSchema, collection);
    }

    for (let i = 0; i < result.length; i++) {
      const info = (await Query.find({"name" : result[i].name}, {"_id" : 0, "price" : 1}))[0].price;
      result[i].price = info;
      result[i].discountedPrice = (info * (100 - result[i].percentage) / 100).toFixed(2);
      delete result[i].total;
      delete result[i].obtained;
    }
    res.send(result);
  }
  
  getRecommendation();
});

module.exports = app;