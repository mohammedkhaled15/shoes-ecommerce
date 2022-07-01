import React from 'react'
import ProductDetails from './ProductDetails'
import ProductShow from './ProductShow'
function ProductPage() {
    return (
        <div className="container mt-10 mb-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-10 md:gap-5 ">
            <ProductShow heroClick={window.innerWidth > "375" ? true : false} />
            <ProductDetails />
        </div>
    )
}

export default ProductPage