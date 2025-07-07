import React from 'react'
import logo from '../assets/image/Selllerhub.jpg'

const SellerNavbar = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
         <a className="navbar-brand fw-bold me-3  "  href="#">
      <img src={logo} alt="Logo" width="200" height="70" className="d-inline align-text-center"/>
      </a>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
  <a class="nav-link active" aria-current="page" href="#">Sell Online</a>
</li>

<li class="nav-item dropdown">
  <button
    class="btn btn dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Flipkart Plus Zone</a></li>
  </ul>
</li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Fee and Commission</a>  
            </li>
            <li class="nav-item dropdown">
  <button
    class="btn btn dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Flipkart Plus Zone</a></li>
  </ul>
</li>
            
            <li class="nav-item">
              <a class="nav-link active" href="#">Grow</a>
            </li>
            <li class="nav-item dropdown">
  <button
    class="btn btn dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Flipkart Plus Zone</a></li>
  </ul>
</li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Learn</a>
            </li>
            <li class="nav-item dropdown">
  <button
    class="btn btn dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">My Profile</a></li>
    <li><a class="dropdown-item" href="#">Flipkart Plus Zone</a></li>
  </ul>
</li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Shopsy</a>
            </li>
          </ul>
          <span class="navbar-text">
            <a class="nav-link active p-4" href="#">login</a>
          </span>
          <button type="button" class="btn btn-warning">Start Selling</button>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default SellerNavbar
