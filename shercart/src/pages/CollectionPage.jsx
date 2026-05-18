import React from 'react'
import Cards from '../components/Cards'

const CollectionPage = ({addToCart}) => {
  return (
    <div className='pt-25'>
      <Cards addToCart={addToCart}/>
    </div>
  )
}

export default CollectionPage
