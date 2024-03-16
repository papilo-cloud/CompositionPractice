import React, { ReactNode } from 'react'


export interface ProductInfoProps {
  children: ReactNode
}
export const ProductInfo = ({children}: ProductInfoProps) => {
  return (
    <div className='product-info'>
        {children}
    </div>
  )
}
