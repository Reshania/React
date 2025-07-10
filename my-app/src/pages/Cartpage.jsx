
import React from 'react'
import { useEffect,useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import axios from 'axios'
const Cartpage = () => {
    const[cartItem, setCartItem] = useState([]);
    useEffect(() => {
      const fetchItems = async()=>{
        try{
       const response = await axios.get(`https://my-flipkart.onrender.com/api/get`);
        console.log("Fetched data:", response.data); 
        const data = response.data;
        setCartItem(Array.isArray(data) ? data : []);
        }
        catch(error){
          console.error("Error fetching cart items:", error);
           setCartItem([]);
        }
      };
      fetchItems()
    }, []);  
const handledelete =async (id) => {
  try {
    await axios.delete(`https://my-flipkart.onrender.com/api/delete/${id}`);
    setCartItem(cartItem.filter(item => item._id !== id));
    console.log("Item deleted successfully");
  } catch (error) {
    console.error("Error deleting item:", error);
  }
}
  return (
    <div>
      <h1>Your cart items</h1>
<div class=" bg-body-tertiary p-4 ">
      
  {cartItem.map((item, index) => {
    return (
      <div className="card m-4" style={{ width: '18rem',height:'30rem' }} key={index}>
        <img src={item.image} className="card-img-top" alt={item.title} />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <a  className="btn btn-primary p-2 m-3"onClick={() => handledelete(item._id)}>Remove</a>
           <Link to="/deliverypage"> <button  className="btn btn-primary p-2">Buy Now </button></Link>
          
        </div>
      </div>
    );
  })}
  
</div>
</div>
   
  )
}

export default Cartpage

