import React, { useContext } from 'react'
import { ReactComponent as Next } from "./../../assets/images/icon-next.svg"
import { ReactComponent as Prev } from "./../../assets/images/icon-previous.svg"

import { appContext } from '../../context/ShoppingContext'

function ProductShow({ product, index, heroClick, heroImg, setHeroImg, setimgIndic, imgIndic, imgRefs, handleShowFullGallery, handleNext, handlePrev, showFullGallery }) {

    const { showCartModal, products } = useContext(appContext)


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

        <div onClick={e => e.stopPropagation()} className='product-show max-w-lg mx-auto' >

            <div onClick={e => handleShowFullGallery(e)} className={`hero  mb-10 rounded-3xl overflow-hidden w-full   ${window.innerWidth <= "450" ? "w-screen rounded-none -ml-4 -mt-10 relative" : ""} ${heroClick ? "cursor-pointer" : ""}`}>

                <img data-index={index} src={heroImg} alt={`Product${index}`} />

                {window.innerWidth <= "450" && !showCartModal ? <><span onClick={e => handlePrev(e)} className={` ${imgIndic === 0 ? "!hidden" : "!grid"} nav-btn-sm left-[10%]  -translate-x-1/2 -translate-y-1/2`}><Prev /></span>
                    <span onClick={e => handleNext(e)} className={`${imgIndic === 3 ? "!hidden" : "!grid"} nav-btn-sm  right-[10%] translate-x-1/2 -translate-y-1/2`}><Next /></span></> : ""}

            </div>

            <div className={`${window.innerWidth <= "450" ? "hidden" : "flex flex-row gap-8"} thumbnails w-full `}>

                {product.thumbnails.map((el, ind) => (

                    <div key={ind} className={`thum ${showFullGallery ? "-z-10" : ""} ${ind === imgIndic ? "active" : ""}`}
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