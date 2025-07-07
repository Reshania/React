const express = require('express');
const router = express.Router();
const { createCard, getCards,addCards, deleteCard } = require('../controller/cardController.js');
router.post('/create', createCard);     
router.get('/get', getCards);  
router.post('/add', addCards);
router.delete('/delete/:id', deleteCard); // Assuming you will implement deleteCard in the controller      

module.exports = router;
