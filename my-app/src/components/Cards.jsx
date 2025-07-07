import React from 'react'
import kilos from '../assets/image/kilos.webp'
import Appliance from '../assets/image/Appliances.webp'
import BeautyandToy from '../assets/image/BeautyandToy.webp'
import Electronic from '../assets/image/Electronic.jpg'
import Fashion from '../assets/image/Fashion.jpg'
import { Outlet, Link } from "react-router-dom";
/*import FlighBookings from '../assets/image/'
import kilos from '../assets/image/kilos.webp'
import kilos from '../assets/image/kilos.webp'
import kilos from '../assets/image/kilos.webp'*/


const Cards = () => {

 const cards = [
      { img: 'kilos.webp', p: 'kilos' },
      { img: 'Appliances.webp', p: 'Appliance',Link:'/appliancespage' },
      { img: 'BeautyandToy.webp', p: 'BeautyandToy',Link:'/beautypage' },
      { img: 'Electronic.jpg', p: 'Electronic' },
      { img: 'Fashion.jpg', p: 'Fashion' },
      { img: 'Fligh Bookings.webp', p: 'Fligh Booking' },
      { img: 'mobiles.webp', p: 'mobiles' },
      { img: 'twowheeler.webp', p: 'Two Wheeler' },

    ];
  
    return(
       <div>
      <div className="row flex-nowrap overflow-auto g-2 bg-body-tertiary mt-4">
        {cards.map((card, index) => (
          <div className="col" key={index}>
             <Link to={card.Link} className="text-decoration-none text-dark">
            <div className="card bg-body-tertiary border-0 d-flex">
              
              <img 
              src={card.img}
                className="card-img"
                alt="Card image"
                style={{ width: '70px', height: '70px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <p className="card-title">{card.p}</p>
                
              </div>
             
            </div>
             </Link>
          </div>
          
        ))}
      </div>
    </div>
    
     /* <div className="row flex-nowrap overflow-auto g-2 bg-body-tertiary mt-4">
        <div className="col ">
          <div className="card bg-body-tertiary border-0 d-flex ">
            <img src={kilos} className="card-img" alt="Card image" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />

            <div className="card-body">
              <h5 className="card-title">kilos</h5>

            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card bg-body-tertiary border-0 d-flex ">
            <img src={Appliance} className="card-img" alt="Card image" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />

            <div className="card-body">
              <h5 className="card-title">Appliance</h5>

            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card bg-body-tertiary border-0 d-flex ">
            <img src={BeautyandToy} className="card-img" alt="Card image" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />

            <div className="card-body">
              <h5 className="card-title">Beauty and Toy</h5>

            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card bg-body-tertiary border-0 d-flex ">
            <img src={Electronic} className="card-img" alt="Card image" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />

            <div className="card-body">
              <h5 className="card-title">Electronic</h5>

            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card bg-body-tertiary border-0 d-flex ">
            <img src={Fashion} className="card-img" alt="Card image" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />

            <div className="card-body">
              <h5 className="card-title">Fashion</h5>

            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card bg-body-tertiary border-0 d-flex ">
            <img src={kilos} className="card-img" alt="Card image" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />

            <div className="card-body">
              <h5 className="card-title">kilos</h5>

            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card bg-body-tertiary border-0 d-flex ">
            <img src={kilos} className="card-img" alt="Card image" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />

            <div className="card-body">
              <h5 className="card-title">kilos</h5>

            </div>
          </div>
        </div>

      </div>*/

    )
}
export default Cards