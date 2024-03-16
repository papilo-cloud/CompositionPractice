import React from 'react'

export const ProductPrice = (
    {price, discountedPrice}:
    {price: string; discountedPrice: string}
    ) => {
      return (
        <div className='price'>
          <h2>{price}</h2>
          <p>{discountedPrice}</p>
        </div>
      )
}
