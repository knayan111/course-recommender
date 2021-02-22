const express = require('express');
const mongoose = require('mongoose');

const app = express();

const Subject_TopicSchema = new mongoose.Schema({
  subject : String,
  route : String,
  topic : Array
})

app.get('/:subject', (req, res) => {
  async function getTopics(){
		const subject = req.params.subject;
		let Query;
		try {
			Query = mongoose.model("Subject_Topic");
		} catch (error) {
			Query = mongoose.model("Subject_Topic", Subject_TopicSchema, "Subject_Topic");
		}
		const info= await Query.find({"route" : subject}, {"_id" : 0, "topic" : 1});
		res.send(info[0].topic);
	}

	getTopics();
});

module.exports = app;