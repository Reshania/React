import React from 'react'

const beautypagesidebar = () => {
  return (
   
      <div class="flex-shrink-0 p-3 bg-white " style={{width: '280px'}}>
    <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
      <svg class="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-5 fw-semibold">Filters</span>
    </a>
    <ul class="list-unstyled ps-0">
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
         CATEGORIES
        </button>
        <div class="collapse show" id="home-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">Shaving & Beard Care</a></li>
            <li><a href="#" class="link-dark rounded">Hair Care</a></li>
            <li><a href="#" class="link-dark rounded">Makeup</a></li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          PRICE
        </button>
        <div class="collapse" id="dashboard-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">₹500+</a></li>
            <li><a href="#" class="link-dark rounded">₹1000+</a></li>
            <li><a href="#" class="link-dark rounded">₹2000+</a></li>
            <li><a href="#" class="link-dark rounded">₹2500+</a></li>
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
         BRAND
        </button>
        <div class="collapse" id="orders-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">1st Step</a></li>
            <li><a href="#" class="link-dark rounded">2GM</a></li>
            <li><a href="#" class="link-dark rounded">360 Natural</a></li>
            <li><a href="#" class="link-dark rounded">365 Care</a></li>
          </ul>
        </div>
      </li>
      <li class="border-top my-3"></li>
      <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
          OFFERS
        </button>
        <div class="collapse" id="account-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">Special price</a></li>
            <li><a href="#" class="link-dark rounded">Buy More, save More</a></li>
            <li><a href="#" class="link-dark rounded">No Cost EMI</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
    
  )
}

export default beautypagesidebar
