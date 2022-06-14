// Dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const inquiryController = require('./controllers/Inquiry');
const nodemailer = require('nodemailer');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Redirect
app.get('/', (req, res) => {
	res.redirect('/inquiries');
});

// nodemailer

app.get('/', (req, res)=>{
	res.sendFile('/inquires')
})

app.post('/inquiries', (req, res) => {
	console.log(req.body);

	const transporter = nodemailer.createTransport({
		service: 'outlook',
		auth: {
			user: process.env.AUTH_USER,
			pass: process.env.AUTH_PASS,
		},
	});

	const mailOptions = {
		from: req.body.name,
		to: 'rm1234562022@outlook.com',
		subject: `${req.body.name} at ${req.body.email} has submitted an inquiry.`,
		text: req.body.comments,
	};
	
	transporter.sendMail(mailOptions, (error, info)=> {
		if(error){
			console.log(error);
			res.send('error');
		}else {
			console.log('email sent: ' + info.response);
			res.send('success')
		}
	})
})



// Controllers
// Forward all requests to localhost:3111/inquiries to the inquiry controller
app.use('/inquiries', inquiryController);

app.listen(3111, () => {
	console.log('Inquiries are here on port 3111');
});
