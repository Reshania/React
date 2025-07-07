const Card = require('../models/cardModels'); 

const createCard = async (req, res) => {
  try {
    
    const card = new Card(req.body);
    const savedCard = await card.save();
    res.status(201).json(savedCard);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Get all cards
const getCards = async (req, res) => {
    try{
        const getCard = await Card.find();
        res.status(200).json(getCard);
       

    }
    catch(error){
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const addCards =  async (req, res) => {
  try {
    const { title, description, image, price } = req.body;
    const newItem = new Card({ title, description, image, price });
    await newItem.save();
    res.status(201).json({ message: 'Item added to cart', newItem });
  } catch (error) {
    console.error('Error adding item:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
const deleteCard = async (req,res) => {
  try{
  const {id} = req.params;
  const deletedCard = await Card.findByIdAndDelete(id);
  if(!deletedCard){
    return res.status(404).json({ message: 'Card not found' });
  }
   return res.status(200).json({ message: 'Card deleted successfully', card: deletedCard });
}
  catch(error){
    console.error('Error deleting card:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = {
  createCard,getCards,addCards,deleteCard};