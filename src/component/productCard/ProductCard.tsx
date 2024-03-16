import React, { ReactNode } from 'react'
import ProductCardContext from './ProductCardContext';
import { Product } from '../../App';
export interface ProductCardProps {
  product: Product
  image?: ReactNode;
  info?: ReactNode;
  action?: ReactNode;
}

export const ProductCard = ({image, info, action, product}: ProductCardProps) => {
  return (
    <ProductCardContext.Provider value={{product}}>
      <div className='product-card'>
        {image}
        <div className="product-bottom">
            {info}
            {action}
        </div>
      </div>
    </ProductCardContext.Provider>
    
  )
}
