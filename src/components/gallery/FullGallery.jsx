import React, { useContext } from 'react'
import { appContext } from '../../context/ShoppingContext'
import { ReactComponent as Next } from "./../../assets/images/icon-next.svg"
import { ReactComponent as Prev } from "./../../assets/images/icon-previous.svg"
import { ReactComponent as Close } from "./../../assets/images/icon-close.svg"
import ProductShow from '../product-page/ProductShow'

function FullGallery() {
    const { handleNext, handlePrev, handleClose } = useContext(appContext)
    return (
        <div className='fixed w-screen h-screen flex flex-col justify-center items-center gap-8 bg-blackTransparent top-0 left-0 '>
            <ProductShow heroClick={false} />
            <span onClick={handleClose} className='close-btn'><Close color='#fff' /></span>
            <span onClick={handlePrev} className={`nav-btn left-[27%] -translate-x-full`}><Prev /></span>
            <span onClick={handleNext} className='nav-btn right-[27%] translate-x-full'><Next /></span>
        </div>
    )
}

export default FullGallery