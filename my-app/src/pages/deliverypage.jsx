import React from 'react'

const deliverypage = () => {
  return (
    <div className="bg-body-tertiary"style={{height:'1000px'}}>
      <nav class="navbar bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand text-light" style={{paddingLeft:'70px'}} href="#">Flipkart</a>
  </div>
</nav>
<div class="card m-5 w-50">
  <div class="card-header bg-primary text-white ">
    1 LOGIN OR SIGNUP
  </div>
  <div class="card-body d-flex ">
  <div class="card-body  ">
   <input
  type="text"
  className="form-control border-0 border-bottom rounded-0 shadow-none"
  placeholder="Enter Email/Mobile number"
/>

    
    <p class="card-text p-3">By counting,you agree to Flipkart's <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a>.</p>
    <a href="#" class="btn btn-warning d-block mx-auto" style={{width:'200px'}}>CONTINUE</a>
  </div>
  <div class="card-body">
  <h5>Advantages of our secure login</h5>
  <ul>
    <li>Easily track Orders,hassle free returns</li>
    <li>Get Relevant Alerts and Recommendation</li>
    <li>Wishlist,Reviews,ratings and more.</li>
  </ul>
</div>
</div>
</div>
<div class="card m-5 w-50 " style={{height:'50px'}}>
  2 DELIVERY ADDRESS
</div>
<div class="card m-5 w-50 " style={{height:'50px'}}>
 3 ORDER SUMMARY
</div>
<div class="card m-5 w-50 " style={{height:'50px'}}>
  4 PAYMENT OPTIONS
</div>
    </div>
  )
}

export default deliverypage
