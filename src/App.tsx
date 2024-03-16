// import React from 'react'
import './App.css'
import { ProductBUtton } from './component/productCard/ProductBUtton'
import { ProductCard } from './component/productCard/ProductCard'
import { ProductCategory } from './component/productCard/ProductCategory'
import { ProductImage } from './component/productCard/ProductImage'
import { ProductInfo } from './component/productCard/ProductInfo'
import { ProductPrice } from './component/productCard/ProductPrice'
import { ProductText } from './component/productCard/ProductText'
import { ProductTitle } from './component/productCard/ProductTitle'

interface Product {
  id: number;
  title: string;
  image: string;
  category: string
  price: string
  discountedPrice: string
  text: string
}

const procuct: Product = {
  id: 1,
  title: 'Gabrielle Essence Eau De Parfum',
  image: '',
  category: 'perfume',
  price: '$149.99',
  discountedPrice: '$169.99',
  text: `A floral, solar and voluptuous interpretation composed by Olivier Polge, 
          Perfumer-Creator for the House of CHANEL.`
}

function App() {

    return (
    <div className="App">
        <ProductCard
          image={<ProductImage />}
          info={
            <ProductInfo>
              <ProductCategory category={procuct.category} />
              <ProductTitle title={procuct.title} />
              <ProductText text={procuct.text} />
              <ProductPrice 
                price={procuct.price}
                discountedPrice={procuct.discountedPrice} />
            </ProductInfo>
          }
          action={<ProductBUtton />}
         />
    </div>
  )
}

export default App
