// schemas/contact.js

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  ttc: String, // Fix the variable name here
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
