import React from 'react'

import logo from '../assets/image/flipkartlogo.png'
import { Outlet, Link } from "react-router-dom";







const Navbar = () => {
  return (
  
     <nav className="navbar navbar-expand-lg bg-body-tertiary w-100" >
  <div className="container-fluid d-flex align-items-center">
    <a className="navbar-brand fw-bold me-3 w-25 "  href="#">
      <img src={logo} alt="Logo" width="200" height="70" className="d-inline align-text-center"/>
      </a>
          
    <form className="d-flex flex-grow-1 w-75"role="search" >
      <input className="form-control me-2"  type="search" placeholder="Search for product,brand..." aria-label="Search"/>
      
    </form>
    <div className="btn-group" role="group">
      <button type="button" className="btn btn" fdprocessedid="bbgwp5">login</button>
     

        <button type="button" className="btn btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" fdprocessedid="vnq1x">
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">My profile</a></li>
          <li><a className="dropdown-item" href="#">Flipkart Plus Zone</a></li>
        </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
              <Link to="/cartpage" className="nav-link active">Cart</Link>
        </li>
        <li className="nav-item">
          <Link to="/sellerpage" className="nav-link active">become seller</Link>
          
        </li>
      </ul>
      
    </div>
    <button className="btn">
  <i className="bi bi-three-dots"></i>
</button>


</div>
 

      </nav>



  )
}

export default Navbar
