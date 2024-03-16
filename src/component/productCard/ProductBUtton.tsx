import React from 'react'
import { CartIcon } from './icon/cartIcon'

interface ProductBUttonProps extends React.ComponentProps<'button'> {
    text?: string
}
export const ProductBUtton  = ({text= 'Add to Cart', ...props}: ProductBUttonProps) => {
  return (
    <button className='product-button' {...props}>
        <CartIcon /> {text}
    </button>
  )
}
