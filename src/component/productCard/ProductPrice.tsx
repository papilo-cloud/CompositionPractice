import React from 'react'
import { useProductCardContext } from './ProductCardContext'

export const ProductPrice = () => {

  const {product} = useProductCardContext()
      return (
        <div className='price'>
          <h2>{product.price}</h2>
          <p>{product.discountedPrice}</p>
        </div>
      )
}
