import React from 'react'
import { useProductCardContext } from './ProductCardContext'

export const ProductText = () => {
  const { product } = useProductCardContext()
  return (
    <p className='text'>{product.text}</p>
  )
}
