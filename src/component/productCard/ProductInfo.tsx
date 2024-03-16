import React from 'react'
import { ProductCategory } from './ProductCategory';
import { ProductTitle } from './ProductTitle';
import { ProductText } from './ProductText';
import { ProductPrice } from './ProductPrice';


export interface ProductInfoProps {
  category: string;
  text: string;
  price: string;
  discountedPrice: string;
  title: string;
}
export const ProductInfo = ({category, text, price, discountedPrice, title}: ProductInfoProps) => {
  return (
    <div className='product-info'>
        <ProductCategory category={category} />
        <ProductTitle title={title} />
        <ProductText text={text} />
        <ProductPrice 
          price={price}
          discountedPrice={discountedPrice} />
    </div>
  )
}
