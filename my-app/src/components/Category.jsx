import React from 'react'
import truewireless from '../assets/image/truewireless.webp'
import FlighBookingsCard from '../assets/image/FlighBookingsCard.webp'
import { Outlet, Link } from "react-router-dom";

const Category = () => {

 const category =[
    {img:'truewireless.webp',p:'truewireless',Link:'/monitorpage'},
    {img:'bestShaver.webp',p:'Best Shaver',Link:'/monitorpage'},
    {img:'Monitors.webp',p:'Monitors',Link:'/monitorpage'},
    {img:'projector.webp',p:'Projector',Link:'/monitorpage'},
    {img:'speaker.webp',p:'Speaker',Link:'/monitorpage'},
    {img:'projectors.webp',p:'projectors',Link:'/monitorpage'},
 ];

  return (
    <div className="row flex-nowrap overflow-auto g-2 bg-body-tertiary mt-4 align-items-center">
      {category.map((category,index) => ( 
            <div className="col" key={index}>
              <Link to={category.Link} className="text-decoration-none text-dark">
               <div className="card bg-body-tertiary border-0 d-flex ">
      <img src={category.img} 
      className="card-img" alt="..."
      style={{ width: '200px', height: '200px', objectFit: 'contain',marginLeft:'30px' }}/>
      <div className="card-body">
        <h5 className="card-title-left" style={{marginLeft:'40px'}}>{category.p}</h5>
      </div>
     
    </div>
     </Link>
  </div>
   
  
      ))}

       <div className="card text-bg-dark" style={{width: '300px', height: '450px'}}>
    <img src={FlighBookingsCard} className="card-img" alt="..."/>
</div>
      </div> 

    )
  }
       
    /*  <div className="row flex-nowrap overflow-auto g-2 bg-body-tertiary mt-4 align-items-center">
  <div className="col">
    <div className="card bg-body-tertiary border-0 d-flex ">
      <img src={truewireless} className="card-img" alt="..."style={{ width: '200px', height: '200px', objectFit: 'contain',marginLeft:'30px' }}/>
      <div className="card-body">
        <h5 className="card-title-left" style={{marginLeft:'40px'}}>TrueWireless</h5>
      </div>
    </div>
  </div>
   <div className="col">
    <div className="card bg-body-tertiary border-0 d-flex ">
      <img src={truewireless} className="card-img" alt="..."style={{ width: '200px', height: '200px', objectFit: 'contain',marginLeft:'30px' }}/>
      <div className="card-body">
        <h5 className="card-title-center" style={{marginLeft:'40px'}}>TrueWireless</h5>
      </div>
    </div>
  </div>
   <div className="col">
    <div className="card bg-body-tertiary border-0 d-flex ">
      <img src={truewireless} className="card-img" alt="..."style={{ width: '200px', height: '200px', objectFit: 'contain',marginLeft:'30px' }}/>
      <div className="card-body">
        <h5 className="card-title"style={{marginLeft:'40px'}}>TrueWireless</h5>
      </div>
    </div>
  </div>
   <div className="col">
    <div className="card bg-body-tertiary border-0 d-flex ">
      <img src={truewireless} className="card-img" alt="..."style={{ width: '200px', height: '200px', objectFit: 'contain',marginLeft:'30px' }}/>
      <div className="card-body">
        <h5 className="card-title-left"style={{marginLeft:'40px'}}>TrueWireless</h5>
      </div>
    </div>
  </div>
   <div className="col">
    <div className="card bg-body-tertiary border-0 d-flex ">
      <img src={truewireless} className="card-img" alt="..."style={{ width: '200px', height: '200px', objectFit: 'contain',marginLeft:'30px' }}/>
      <div className="card-body">
        <h5 className="card-title-left"style={{marginLeft:'40px'}}>TrueWireless</h5>
      </div>
    </div>
  </div>
   <div className="col">
    <div className="card bg-body-tertiary border-0 d-flex ">
      <img src={truewireless} className="card-img" alt="..."style={{ width: '200px', height: '200px', objectFit: 'contain',marginLeft:'30px' }}/>
      <div className="card-body">
        <h5 className="card-title"style={{marginLeft:'40px'}}>TrueWireless</h5>
      </div>
    </div>
  </div>
   <div className="col">
    <div className="card bg-body-tertiary border-0 d-flex align ">
      <img src={truewireless} className="card-img" alt="..."style={{ width: '200px', height: '200px', objectFit: 'contain',marginLeft:'30px' }}/>
      <div className="card-body">
        <h5 className="card-title-left"style={{marginLeft:'40px'}}>TrueWireless</h5>
      </div>
      
    
    </div>

 
        </div>
      
   <div className="card text-bg-dark" style={{width: '300px', height: '450px'}}>
    <img src={FlighBookingsCard} className="card-img" alt="..."/>
</div>
    
    </div>
    */
    
export default Category
