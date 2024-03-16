// import React from 'react'
import './App.css'
import { ProductBUtton } from './component/productCard/ProductBUtton'
import { ProductCard } from './component/productCard/ProductCard'
import { ProductImage } from './component/productCard/ProductImage'
import { ProductInfo } from './component/productCard/ProductInfo'

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
          info={<ProductInfo 
                  category={procuct.category}
                  title={procuct.title}
                  text={procuct.text}
                  price={procuct.price}
                  discountedPrice={procuct.discountedPrice}
                />}
          action={<ProductBUtton />}
         />
    </div>
  )
}

export default App
