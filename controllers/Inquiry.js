const express = require('express');
const Inquiry = require('../db/models/Inquiry');

const router = express.Router();

// Index: Get all inquiries
// http://localhost:3111/inquiries/
router.get('/', (req, res) => {
	Inquiry.find({}).then((comment) => {
		res.json(comment);
	});
});

// Show: Get one inquiry by id
// http://localhost:3111/inquiries/id
router.get('/:id', (req, res) => {
	Inquiry.findById({ _id: req.params.id }).then((comment) => {
		res.json(comment);
	});
});

// Show: Get one inquiry by name
// http://localhost:3111/inquiries/names/name
router.get('/names/:name', (req, res) => {
	Inquiry.findOne({ name: req.params.name }).then((comment) => {
		res.json(comment);
	});
});

// Create: Add an inquiry
// http://localhost:3111/inquiries/
router.post('/', (req, res) => {
	Inquiry.create(req.body).then((comment) => {
		res.status(201).json(comment);
	});
});

// Update: Edit an inquiry by id
// http://localhost:3111/inquiries/id
router.put('/:id', (req, res) => {
	Inquiries.findByIdAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	}).then((comment) => {
		res.json(comment);
	});
});

// Delete: Remove an inquiry by id
// http://localhost:3111/inquiries/id
router.delete('/:id', (req, res) => {
	Inquiry.findByIdAndDelete({ _id: req.params.id }).then((delComment) => {
		res.json(delComment);
	});
});

module.exports = router;
