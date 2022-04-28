// Dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const inquiryController = require('./controllers/Inquiry');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Redirect
app.get('/', (req, res) => {
	res.redirect('/inquiries');
});

// Controllers
// Forward all requests to localhost:3111/inquiries to the inquiry controller
app.use('/inquiries', inquiryController);

app.listen(3111, () => {
	console.log('Inquiries are here!');
});
