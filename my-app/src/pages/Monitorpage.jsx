import React from 'react'
import Monitor from '../assets/image/Monitors.webp'
import { Outlet, Link } from "react-router-dom";
const Monitorpage = ({ onAddToCart }) => {
    
  return (
    <div>
      {
        
     
        
        <div class="card w-100 h-75 m-4" style={{width:'540px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Monitor} class="img-fluid rounded-start" style={{width:'500px',height:'500px'}} alt="..."/>
      <Link to="/cartpage">
      <button   className="p-3 w-25 m-5 bg-warning"  onClick={() => onAddToCart(card)}>Add to cart</button>
      </Link>
      <Link to="/deliverypage">
      <button className="p-3 w-25 m-5 bg-warning">Buy Now</button>
      </Link>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Dell 60.45 cm (23.8 inch) Full HD VA Panel 3-Side Near Edgeless with TUV Eye Care Monitor (D24-20/D24-40)  (Response Time: 4 ms, 75 Hz Refresh Rate)</h5>
        <h2 class="card-text">₹6,599</h2>
        <p class="card-text">Secure delivery by 2 Jun, Monday</p>
        <h2 class="card-text">Available offers</h2>
        <h5 class="m-4">
Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</h5>

<h5 class="m-4">Bank Offer10% instant discount on SBI Credit Card EMI Transactions, up to ₹1,500 on orders of ₹5,000 and aboveT&C</h5>

<h5 class="m-4">Bank Offer10% off up to ₹1,500 on all Axis Bank Credit Card (incl. migrated ones) EMI Txns of ₹5,000 and aboveT&C</h5>

<h5 class="m-4">Special PriceGet extra 22% off (price inclusive of cashback/coupon)T&C</h5>
 <h3 class="card-text">Product Description</h3>
 <h6>
Seamless Visual Experience</h6>
<small>The Dell 60.45 cm (23.8) Full HD VA Panel (D24-20) monitor flaunts a three-side, near-edgeless design that provides a borderless, multi-screen visual experience without any distractions. You can indulge in movie marathons or work on your presentations on its stellar screen without any interruptions caused by image stuttering or screen tearing issues. Furthermore, this monitor emits low levels of blue light, which prevents eye fatigue even after long hours of use.</small>
      </div>
    </div>
  </div>
</div>
}
    </div>
  )
}

export default Monitorpage

