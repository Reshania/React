import { addTocart } from './Beautypagecard'; 

import axios from 'axios'; 

const axioCart = async (card) => {
  try {
    const response = await axios.post('/create', {  
      title: card.title,
      description: card.description,
      imageUrl: card.imageUrl
    });

    console.log('Product saved:', response.data);
  } catch (error) {
    console.error('Error saving product:', error);
  }
};

export default axioCart;
