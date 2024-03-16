import React from 'react'
import { useProductCardContext } from './ProductCardContext'

export const ProductTitle = () => {

  const {product} = useProductCardContext()
  return (
    <h1 className='title'>{product.title}</h1>
  )
}
