const mongoose = require('../db/connection');
const seedData = require('./seeds.json');
const Inquiry = require('./models/Inquiry');

Inquiry.deleteMany({})
	.then(() => {
		Inquiry.insertMany(seedData).then((comment) => {
			console.log('We have inquiries!');
			console.log(comment);
			process.exit();
		});
	})
	.catch((err) => console.error(err));
