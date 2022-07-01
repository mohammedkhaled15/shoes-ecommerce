import React, { useContext } from 'react'
import { ReactComponent as Next } from "./../../assets/images/icon-next.svg"
import { ReactComponent as Prev } from "./../../assets/images/icon-previous.svg"

import { appContext } from '../../context/ShoppingContext'

function ProductShow(props) {
    const { clickHandler, heroImg, imgRefs, handleShowFullGallery, imgSrcs, handlePrev, handleNext, showCartModal } = useContext(appContext)
    return (
        <div className='product-show max-w-lg mx-auto'>
            <div onClick={handleShowFullGallery} className={`hero mb-10 rounded-3xl overflow-hidden w-full  ${window.innerWidth <= "375" ? "w-screen rounded-none -ml-4 -mt-10" : ""} ${props.heroClick ? "cursor-pointer" : ""}`}>
                <img src={heroImg} alt="product" />
                {window.innerWidth <= "375" && !showCartModal ? <><span onClick={handlePrev} className={`nav-btn-sm left-[20%] -translate-x-full`}><Prev /></span>
                    <span onClick={handleNext} className={`nav-btn-sm  right-[20%] translate-x-full`}><Next /></span></> : ""}
            </div>
            <div className={`${window.innerWidth <= "375" ? "hidden" : "flex flex-row gap-8"} thumbnails w-full `}>
                {
                    imgSrcs.thumbnails.map((el, ind) => (
                        <div key={ind} className={`thum ${ind === 0 ? "active" : ""}`}
                            ref={(element) => { imgRefs.current[ind] = element }}>
                            <img src={el}
                                className={`rounded-xl overflow-hidden  cursor-pointer`} data-src={ind}
                                onClick={clickHandler} alt={`product thumbnail`} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductShow