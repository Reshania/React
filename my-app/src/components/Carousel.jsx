import React from 'react'
import Slide1 from '../assets/image/slide1.webp'
import Slide2 from '../assets/image/slide2.webp'
import Slide3 from '../assets/image/slide3.webp'


const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide mt-4">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="" aria-label="Slide 1" fdprocessedid="6ll8qn"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" fdprocessedid="vcrjha" class=""></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" fdprocessedid="99swq" class="active" aria-current="true"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item">
          <img src={Slide1} class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" height="400" preserveAspectRatio="xMidYMid slice" role="img" width="800" xmlns="http://www.w3.org/2000/svg"/><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect>
        </div>
        <div class="carousel-item">
          <img src={Slide2} class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" height="400" preserveAspectRatio="xMidYMid slice" role="img" width="800" xmlns="http://www.w3.org/2000/svg"/><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect>
        </div>
        <div class="carousel-item active">
          <img src={Slide3} class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" height="400" preserveAspectRatio="xMidYMid slice" role="img" width="800" xmlns="http://www.w3.org/2000/svg"/><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" fdprocessedid="duix5s">
        <span class="carousel-control-prev-icon" ></span>
        <span class="visually"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" fdprocessedid="bj4hm">
        <span class="carousel-control-next-icon" ></span>
        <span class="visually"></span>
      </button>
    </div>
    </div>
  )
}

export default Carousel
