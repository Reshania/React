import React from 'react'
import Beautypagesidebar  from '../components/beautypagesidebar'
import Beautypagecard from '../components/Beautypagecard'

const Beautypage = ({ onAddToCart }) => {
  return (
    <div>
      <div className="d-flex bg-body-tertiary" style={{ minHeight: '100vh' }}>
      <Beautypagesidebar />
      <div className ="flex-grow-1">
      
       <Beautypagecard onAddToCart={onAddToCart} />
      </div>
    </div>

    </div>
  )
}

export default Beautypage
