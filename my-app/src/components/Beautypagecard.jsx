import React, { useRef, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';

const Beautypagecard = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = scrollRef.current?.scrollTop || 0;
      console.log("Scroll position:", scrollPosition);
    };

    const refCurrent = scrollRef.current;
    if (refCurrent) {
      refCurrent.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  const Beautycards = [
    { image: 'BlackheadRemover.webp', name: 'Blackheadremover', price: '₹300' },
    { image: 'Blusetlipstick.webp', name: 'Blueset Matte liquid Lipstick', price: '₹33' },
    { image: 'Charcoalmask.webp', name: 'Charcoal peel Off Mask', price: '₹20' },
    { image: 'FLUZOV.webp', name: 'FLUZOV sweat pad', price: '₹10' },
    { image: 'Muiltanimitti.webp', name: 'Muiltanimitti powder for face', price: '₹100' },
    { image: 'Neemfashwash.webp', name: 'Neem Face Wash for ache', price: '₹150' },
    { image: 'Sketcheyeliner.webp', name: 'Sketch Eyeliner', price: '₹50' },
    { image: 'Vaselinemoisture.webp', name: 'Vaselinr Mositure for smooth body', price: '₹400' }
  ];
const handleAddToCart = async (card) => {
  try {
    await axios.post('https://my-flipkart.onrender.com/api/add', {
      title: card.name,
      description: card.name,
      image: card.image,
      price: card.price
    });
    alert("Item added to cart!");
  } catch (error) {
    console.error("Error adding to cart:", error);
    alert("Failed to add item.");
  }
};
  return (
    <div>
       
        <div className="d-block w-100 p-3 m-3 bg-white"style={{ width:'100%'}}>
  <div className="d-flex align-items-center">
    <h4 className="mb-0 p-4"style={{margin :'10px',marginRight:'0px'}}>Beauty And Grooming</h4>
    <small className="text-muted">(Showing 1 – 40 of 115,581 products)</small>
  </div>
  </div>
  <div className="w-100 bg-white " style={{ padding: '20px 0' }} >
   <ul className="nav nav-underline m-3 w-100 bg-white">
      <li className="nav-item ">
        <a className="nav-link text-secondary  " aria-current="page" href="#">Active</a>
      </li>
      <li className="nav-item">
      <a className="nav-link text-secondary "  href="#">Popularity</a>
      </li>
      <li className="nav-item">
      <a className="nav-link text-secondary " href="#">Price--Low to High</a>
      </li>
      <li className="nav-item">
      <a className="nav-link text-secondary" href="#">Price-- High to Low</a>
      </li>
      <li className="nav-item">
      <a className="nav-link text-secondary" href="#">Newest First</a>
      </li>
    </ul>
   </div>
 

      <div
        className="row g-4 bg-body-tertiary p-4"
        ref={scrollRef}
        style={{
          height: 'calc(100vh - 130px)',
          overflowY: 'auto'
        }}>
    {Beautycards.map((card,index)=>
    <div className="col" key={index}>

 <div className="card" style={{width: ' 18rem'}}>
  <img src={card.image} className="card-img-top" style={{height:'200px',width:'200px'}} alt="..."/>
  <div className="card-body">
    <p className="card-text">{card.name}</p>
    <h4 className="card-text">{card.price}</h4>
    <Link to ="/cartpage">
    <button className="m-2 bg-warning" onClick={() => handleAddToCart(card)}>Add to cart</button>
    </Link>
     <Link to="/deliverypage">
      <button className=" bg-warning">Buy Now</button>
      </Link>
  </div>
</div>
      
</div>
    )}
    
    
   
 </div>



</div>

  
  );
}


export default Beautypagecard
