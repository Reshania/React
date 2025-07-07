import React from 'react'
import Sellerimage from '../assets/image/sellerimage.webp'
import people from '../assets/image/people.jpeg'
import wallet from '../assets/image/wallet.jpeg'
import arrow from '../assets/image/arrow.jpeg'
import call from '../assets/image/call.jpeg'
import bag from '../assets/image/bag.jpeg'

const SellerCards = () => {
  return (
    <div>
      <div class="card text-bg-dark">
  <img src={Sellerimage} class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <h1 class="card-title text-dark">Sell Online with flipkart</h1>

    <div className="position-absolute bottom-0 start-0 p-3 bg-light">
  <div className="d-flex justify-content-start gap-5 text-center">

    <div className="d-flex flex-column align-items-center">
      <img src={people} className="img-fluid mb-1" alt="people" style={{ width: "40px" }} />
      <p className="card-title text-dark mb-0">45 crore+ Flipkart customers</p>
    </div>

    <div className="d-flex flex-column align-items-center">
      <img src={wallet} className="img-fluid mb-1" alt="people" style={{ width: "40px" }} />
      <p className="card-title text-dark mb-0">7* days secure & regular payments</p>
    </div>

    <div className="d-flex flex-column align-items-center">
      <img src={arrow} className="img-fluid mb-1" alt="people" style={{ width: "40px" }} />
      <p className="card-title text-dark mb-0">Low cost of doing business</p>
    </div>

     <div className="d-flex flex-column align-items-center">
      <img src={call} className="img-fluid mb-1" alt="people" style={{ width: "40px" }} />
      <p className="card-title text-dark mb-0">One click Seller Support</p>
    </div>

 <div className="d-flex flex-column align-items-center">
      <img src={bag} className="img-fluid mb-1" alt="people" style={{ width: "40px" }} />
      <p className="card-title text-dark mb-0">Access to The Big Billion Days & more</p>
    </div>


  </div>
</div>

  </div>
</div>
    </div>
  )
}

export default SellerCards
