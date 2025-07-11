import React from 'react'
import { useState } from 'react'
import Homepage from './pages/Homepage'
import Cartpage from './pages/Cartpage'
import Sellerpage from './pages/Sellerpage'
import Appliancespage from './pages/Appliancespage'
import Beautypage from './pages/Beautypage'
import Monitorpage from './pages/Monitorpage'
import Deliverypage from './pages/deliverypage'
import Beautypagecard from './components/Beautypagecard'
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {

  const [cartItem, setCartItem] = useState([]);
   const handleAddToCart = (card) => {
    setCartItem(prevCart => [...prevCart, card]);
  };


  return (



    
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Homepage />} />
      <Route 
          path="/cartpage" 
          element={<Cartpage cartItem={cartItem} />} 
        />
        <Route path="/sellerpage" element={<Sellerpage />} />
        <Route path="/appliancespage" element={<Appliancespage />} />
        
        <Route path="/monitorpage" element={<Monitorpage onAddToCart={handleAddToCart} />} />
         <Route 
          path="/beautypagecard" 
          element={<Beautypagecard onAddToCart={handleAddToCart} />} 
        />
        <Route path="/beautypage" element={<Beautypage onAddToCart={handleAddToCart} />} />

        <Route path="/deliverypage" element={<Deliverypage />} />

      </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
