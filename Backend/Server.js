

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
dotenv.config();
const cardRoutes = require('./routes/CardRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/api', (req, res) => {
  res.send('Welcome to the Card API');
});
app.use('/api', cardRoutes);

// Use the route
const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URL;

mongoose
.connect(MONGOURL)
.then(() => {
  app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  
});

})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});




