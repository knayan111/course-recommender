const express = require('express');
const mongoose = require('mongoose');

const app = express();

const Subject_TopicSchema = new mongoose.Schema({
  subject : String,
  route : String,
  topic : Array
})

app.get('/', (req, res) => {
  async function getSubjects(){
		let Query;
		try {
			Query = mongoose.model("Subject_Topic");
		} catch (error) {
			Query = mongoose.model("Subject_Topic", Subject_TopicSchema, "Subject_Topic");
		}
    var result = [];
		const info = (await Query.find({}, {"_id" : 0, "subject": 1})).forEach(doc => result.push(doc.subject));
		res.send(result);
	}

	getSubjects();
});

module.exports = app;