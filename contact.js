// contact.js

const express = require('express');
const Contact = require('./schemas/contact.js');

const router = express.Router();

router.post('/contactsubmit', async (req, res) => {
  try {
    const { name, email, number, ttc, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      number,
      ttc, // Fix the variable name here
      message,
    });

    await newContact.save();

    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
