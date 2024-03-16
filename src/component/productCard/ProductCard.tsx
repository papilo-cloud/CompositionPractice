import React, { ReactNode } from 'react'
import { ProductImage } from './ProductImage'
import { ProductInfo } from './ProductInfo'
import { ProductBUtton } from './ProductBUtton'
export interface ProductCardProps {

}

export const ProductCard = () => {
  return (
    <div className='product-card'>
        <ProductImage />
        <div className="product-bottom">
            <ProductInfo />
            <ProductBUtton />
        </div>
    </div>
  )
}
