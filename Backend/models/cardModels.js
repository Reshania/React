const mongoose = require('mongoose');
 

 
const CardSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String, 
  },
  
  image:{
    type: String,
  }, 
  price: {
    type: String,
  }
 
});
const card = mongoose.model('Card', CardSchema);
module.exports = card;
