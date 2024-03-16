import React from 'react'
import { useProductCardContext } from './ProductCardContext'

export const ProductCategory = () => {

  const { product } = useProductCardContext()
  return (
    <p className='category-category'>{product.category}</p>
  )
}
