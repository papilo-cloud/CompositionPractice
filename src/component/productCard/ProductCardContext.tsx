import { createContext, useContext } from "react";
import { Product } from "../../App";


const ProductCardContext = createContext<{product: Product} | null>(null)

export const useProductCardContext = () => {
    const context = useContext(ProductCardContext)
    if (!context) {
        throw new Error(
            "ProductCard.* component must be rendered as child of ProductCard component"
        )
    }
    return context
}

export default ProductCardContext;