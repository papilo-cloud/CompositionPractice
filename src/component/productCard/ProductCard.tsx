import React, { ReactNode } from 'react'
export interface ProductCardProps {
  image?: ReactNode;
  info?: ReactNode;
  action?: ReactNode;
}

export const ProductCard = ({image, info, action}: ProductCardProps) => {
  return (
    <div className='product-card'>
        {image}
        <div className="product-bottom">
            {info}
            {action}
        </div>
    </div>
  )
}
