import React from 'react'
import Appliancessale from '../assets/image/Appliancessale.jpg'
import Mixer from '../assets/image/Mixer.webp'
import Waterpurifier from '../assets/image/Waterpurifier.webp'
import Atombergfan from '../assets/image/Atombergfan.webp'

const Appliancespage = () => {
  return (
    <div>
      <div>
        <h5>Grand home appliances sale</h5>
        <div class="card text-bg-dark" >
  <img src={Appliancessale} class="card-img" style={{height:'600px'}} alt="..."/>
</div>
<h1>Summer Pick Not TO Miss</h1>
<div className="row flex-nowrap overflow-auto g-2 bg-body-tertiary mt-4">
<div class="card mb-3 m-3" style={{width:'500px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Mixer} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">750W mixer grinder</h5>
        <p class="card-text">Butterfly Plus</p>
        <h6 class="card-text">Just ₹3,168</h6>
      </div>
    </div>
  </div>
</div>

<div class=" card mb-3 m-3" style={{width:'500px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Atombergfan} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Atomberg fans</h5>
        <p class="card-text">High air delivery</p>
        <h6 class="card-text">LFrom ₹2,324</h6>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3 m-3" style={{width:'500px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Waterpurifier} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">6.2L Water Purifier</h5>
        <p class="card-text">Aquaguard Ritz Pro 2X</p>
        <h6 class="card-text"> Just ₹18,699 </h6>
      </div>
    </div>
  </div>
</div>
</div>
      </div>
    </div>
  )
}

export default Appliancespage
