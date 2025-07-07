import React from 'react'

const Cartitem = () => {
  
   const Cart=[{image: 'BlackheadRemover.webp',name:'Blackheadremover',price:'₹300'},
     {image: 'Blusetlipstick.webp',name:'Blueset Matte liquid Lipstick',price:'₹33'},
    {image:'Charcoalmask.webp',name:'Charcoal peel Off Mask',price:'₹20'},
    {image:'FLUZOV.webp',name:'FLUZOV sweat pad',price:'₹10'},
    {image:'Muiltanimitti.webp',name:'Muiltanimitti powder for face',price:'₹100'},
    {image:'Neemfashwash.webp',name:'Neem Face Wash for ache',price:'₹150'},
    {image:'Sketcheyeliner.webp',name:'Sketch Eyeliner',price:'₹50'},
    {image:'Vaselinemoisture.webp',name:'Vaselinr Mositure for smooth body',price:'₹400'}
]
  return (
    <div>
          <div className="card mx-auto d-block w-75" style={{ marginTop: "30px" }}>
             {Cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.image} alt={item.name} width={100} />
          <div>
            <h4>{item.name}</h4>
            <p>Price: {item.price}</p>
            <p>Quantity: 1</p>
            <p>Total: {item.price}</p>
          </div>
        </div>
      ))}
          </div>
     
    </div>
  )
}

export default Cartitem
