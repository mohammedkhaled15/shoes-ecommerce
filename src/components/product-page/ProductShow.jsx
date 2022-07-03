import React, { useContext, useEffect, useState, useRef, createContext } from 'react'
import { ReactComponent as Next } from "./../../assets/images/icon-next.svg"
import { ReactComponent as Prev } from "./../../assets/images/icon-previous.svg"

import { appContext } from '../../context/ShoppingContext'

function ProductShow({ product, index, heroClick, heroImg, setHeroImg, setimgIndic, imgRefs, handleShowFullGallery, handleNext, handlePrev }) {

    const { showCartModal, products } = useContext(appContext)
    // const [heroImg, setHeroImg] = useState()
    // const imgRefs = useRef([])

    const clickHandler = (e) => {
        imgRefs.current.forEach((img, ind) => {
            img.classList.remove("active")
            if (e.target.dataset.src == ind) {
                img.classList.add("active")
            }
        })
        setHeroImg(products[index].heroes[e.target.dataset.src])
        setimgIndic(+e.target.dataset.src)
    }
    return (

        <div className='product-show max-w-lg mx-auto' >

            <div onClick={(e) => handleShowFullGallery(e)} className={`hero mb-10 rounded-3xl overflow-hidden w-full  ${window.innerWidth <= "375" ? "w-screen rounded-none -ml-4 -mt-10" : ""} ${heroClick ? "cursor-pointer" : ""}`}>

                <img data-index={index} src={heroImg ? heroImg : product.heroes[0]} alt={`Product${index}`} />

                {window.innerWidth <= "375" && !showCartModal ? <><span onClick={handlePrev} className={`nav-btn-sm left-[20%] -translate-x-full`}><Prev /></span>
                    <span onClick={handleNext} className={`nav-btn-sm  right-[20%] translate-x-full`}><Next /></span></> : ""}

            </div>

            <div className={`${window.innerWidth <= "375" ? "hidden" : "flex flex-row gap-8"} thumbnails w-full `}>

                {product.thumbnails.map((el, ind) => (

                    <div key={ind} className={`thum ${ind === 0 ? "active" : ""}`}
                        ref={(element) => { imgRefs.current[ind] = element }}>
                        <img src={el}
                            className={`rounded-xl overflow-hidden  cursor-pointer`} data-src={ind}
                            onClick={(e) => clickHandler(e, index, ind)} alt={`product thumbnail`} />
                    </div>

                ))}

            </div>
        </div >
    )
}

export default ProductShow