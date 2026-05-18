import React from 'react'
import { collections } from '../DummyData/collections'
import Card from "../components/card"
const Cards = ({addToCart}) => {
  return (
    <div className="grid grid-cols-4 gap-8  px-6 py-6">
      {
        collections.map((elem)=>(
          <Card key={elem.id} name={elem.name} price={elem.price} size={elem.sizes} highlight={elem.highlight} detail={elem.detail} image={elem.image}
          addToCart={addToCart}
          />
        ))
      }
    </div>
  )
}

export default Cards


