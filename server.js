// server.js

const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/ContactForm').then(() => console.log('Connected to MongoDB!'))

const contactRoutes = require('./contact');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/contact', contactRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
