import React, { useContext } from 'react'
import { appContext } from '../../context/ShoppingContext'
import ChoosenProduct from './ChoosenProduct'
import { motion } from 'framer-motion'

function CartModal() {
    const { choosenProducts, handleProfileClick } = useContext(appContext)
    return (
        <div className="backdrop fixed top-0 left-0 bottom-0 right-0 z-20 flex h-screen" onClick={handleProfileClick}>
            <div onClick={e => e.stopPropagation()} className={`cart-modal z-30 absolute opacity-1 rounded-2xl top-0 right-0 m-auto mr-4 shadow-zinc-700 shadow-2xl bg-slate-100 w-[90vw] ${window.innerWidth > "450" ? "w-[40vw]" : ""}`}>
                <h2 className='uppercase p-3'>cart</h2>
                <div className='w-full h-[2px] bg-slate-300'></div>
                <div className="cart-content p-3">
                    {choosenProducts.length ? <ChoosenProduct /> : <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay: 0.5, ease: "easeInOut" } }} className='p-6 text-center'>Nothing in Your Cart</motion.h4>}
                    <button className='capitalize p-2 block bg-Orange rounded-lg text-lightGrayishBlue w-[100%] m-auto my-4'>checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartModal