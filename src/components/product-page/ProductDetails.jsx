import React, { useContext, useEffect, useState } from 'react'
import { ReactComponent as Cart } from "./../../assets/images/icon-cart.svg"
import { ReactComponent as Plus } from "../../assets/images/icon-plus.svg"
import { ReactComponent as Minus } from "../../assets/images/icon-minus.svg"
import { appContext } from './../../context/ShoppingContext'
import axios from 'axios'

function ProductDetails() {
    const { count, handleIncreament, handleDecreament, handleAddToCart, productNameRef, productPriceRef, setProductsList, productsList } = useContext(appContext)
    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then(res => setProductsList(res.data))
    }, [])
    return (
        <>
            {productsList.map((product, index) => (
                <div className='product-details' key={product.id}>
                    <h5 className=' text-Orange uppercase mb-6'>sneaker company</h5>
                    <h1 className='capitalize text-5xl mb-12'>{product.name}</h1>
                    <p className=' text-darkGrayishBlue mb-12 text-lg'>{product.description}</p>
                    <h3 ref={productPriceRef} className='price-discount'>${product.price * product.discount}</h3>
                    <del className='block text-darkGrayishBlue mb-10'>${product.price}</del>
                    <div className='btns flex lg:flex-row flex-col  gap-8 mb-10'>
                        <div className=" flex flex-row justify-center items-center">
                            <button onClick={() => handleDecreament(index)} className='counter-btn rounded-l-xl '><Minus /></button>
                            <span className='counter-btn '>{product.count}</span>
                            <button onClick={() => handleIncreament(index)} className='counter-btn rounded-r-xl '><Plus /></button>
                        </div>
                        <div onClick={() => handleAddToCart(product)} className={` bg-Orange p-4 rounded-xl cursor-pointer text-grayishBlue flex lg:flex-row justify-center items-center gap-4 px-20 `}><Cart /> <span>Add to Cart</span></div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProductDetails