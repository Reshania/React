

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
dotenv.config();
const cardRoutes = require('./routes/CardRoutes');

const app = express();
app.use(bodyParser.json());



const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, 
  max: 5
});
app.use(cors({
  origin: 'https://my-flipkart-frontend.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(limiter);
app.get('/api', (req, res) => {
  res.send('Welcome to the Card API');
});
app.use(cors({
  origin: 'https://my-flipkart-frontend.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use('/api', cardRoutes);

// Use the route
const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URL;

mongoose
.connect(MONGOURL)
.then(() => {
  app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
});

})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});




