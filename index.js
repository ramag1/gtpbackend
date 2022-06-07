// Dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer= require('nodemailer')

const inquiryController = require('./controllers/Inquiry');
const { getMaxListeners } = require('./db/models/Inquiry');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Redirect
app.get('/', (req, res) => {
	res.redirect('/inquiries');
});

//NEW STUFF
// app.get('/', (req, res) => {
// 	res.sendFile('/inquiries');
// });

app.post('/inquiries', (req, res) => {
	console.log(req.body)
	const transporter = nodemailer.createTransport({
		service: 'outlook',
		auth: {
			user: 'rm1234562022@outlook.com',
			pass: 'Ilovethis123',
		},
	});

	const mailOptions = {
		from: req.body.name,
		to: 'rm1234562022@outlook.com',
		subject: `Message from ${req.body.email}`,
		text: `${req.body.name}, at ${req.body.email} has emailed you requesting the below information: ${req.body.comments}`
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if(error){
			console.log(error);
			res.send('error');
		} else {
			console.log('Email sent: ' + info.response)
			res.send('Success!')
		}
	})
})

// Controllers
// Forward all requests to localhost:3111/inquiries to the inquiry controller
app.use('/inquiries', inquiryController);

app.listen(3111, () => {
	console.log('Inquiries are here on port 3111!');
});
