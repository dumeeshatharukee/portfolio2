const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/contactForm', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define schema and model
const contactSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  subject: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Handle contact form submission
app.post('/api/contact', async (req, res) => {
  const { fullName, email, subject, message } = req.body;

  const newContact = new Contact({ fullName, email, subject, message });

  try {
    await newContact.save();
    res.status(201).send('Contact data saved successfully');
  } catch (error) {
    res.status(500).send('Error saving contact data');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});