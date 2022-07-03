import React, { useContext } from 'react'
import { appContext } from '../../context/ShoppingContext'
import { ReactComponent as Delete } from "../../assets/images/icon-delete.svg"
import { motion, AnimatePresence } from 'framer-motion'

function ChoosenProduct() {
    const { choosenProducts, handleDeleteProduct } = useContext(appContext)
    return (
        <AnimatePresence>
            {choosenProducts.map((product) => (
                <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeInOut' } }}
                    exit={{ opacity: 0, x: 200, transition: { duration: 0.5, ease: "easeInOut" } }}
                    className=' flex flex-row mb-8 justify-between' >
                    <div className="product-details flex flex-row gap-4">
                        <div className="product-img w-12 rounded-lg overflow-hidden">
                            <img src={product.img} alt="" />
                        </div>
                        <div className="product-info">
                            <h5 className='text-sm text-darkGrayishBlue capitalize'>{product.name}</h5>
                            <p className='text-sm text-darkGrayishBlue capitalize'>${product.totalPrice} <span className='lowercase'>x</span> {product.count} <span className='ml-2 text-black text-[1.1rem]'>${product.totalPrice * product.count}</span></p>
                        </div>
                    </div>
                    <button onClick={() => handleDeleteProduct(product.id, product.count)}><Delete /></button>
                </motion.div>
            ))}
        </AnimatePresence>
    )
}

export default ChoosenProduct   