import React, { useContext, useState, useRef } from 'react'
import ProductDetails from './ProductDetails'
import ProductShow from './ProductShow'
import { appContext } from '../../context/ShoppingContext'
import FullGallery from './../gallery/FullGallery'
import { products } from '../../data'

function ProductPage({ product, index }) {

    // const { showFullGallery } = useContext(appContext)

    const [heroImg, setHeroImg] = useState()

    const [imgIndic, setimgIndic] = useState(0)

    const imgRefs = useRef([])

    const [showFullGallery, setShowFullGallery] = useState({ show: false, product: {} })

    const handleShowFullGallery = (e) => {
        if (window.innerWidth > "375" && !showFullGallery.show) {
            setShowFullGallery({ show: true, product: products[e.target.dataset.index] })
        }
    }

    const handleClose = () => {
        setShowFullGallery(false)
    }

    const handleNext = () => {
        if (imgIndic < 3) {
            let newImgIndic = imgIndic + 1
            setimgIndic(newImgIndic)
            setHeroImg(product.heroes[newImgIndic])
            imgRefs.current.forEach((img, ind) => {
                img.classList.remove("active")
                if (newImgIndic == ind) {
                    img.classList.add("active")
                }
            })
        }
        console.log("next");
    }

    const handlePrev = () => {
        if (imgIndic > 0) {
            let newImgIndic = imgIndic - 1
            setimgIndic(newImgIndic)
            setHeroImg(product.heroes[newImgIndic])
            imgRefs.current.forEach((img, ind) => {
                img.classList.remove("active")
                if (newImgIndic == ind) {
                    img.classList.add("active")
                }
            })
        }
    }
    console.log(heroImg);

    return (
        <React.Fragment key={index}>
            <div key={index} className="container mt-10 mb-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-10 md:gap-5 ">
                <ProductShow heroClick={window.innerWidth > "375" ? true : false} product={product} index={index} heroImg={heroImg} setHeroImg={setHeroImg} setimgIndic={setimgIndic} imgIndic={imgIndic} imgRefs={imgRefs} handleShowFullGallery={handleShowFullGallery} handleNext={handleNext} handlePrev={handlePrev} />
                <ProductDetails product={product} index={index} />
            </div>
            {showFullGallery.show && <FullGallery product={showFullGallery.product} index={index} heroImg={heroImg} setHeroImg={setHeroImg} setimgIndic={setimgIndic} imgIndic={imgIndic} imgRefs={imgRefs} handleClose={handleClose} handleNext={handleNext} handlePrev={handlePrev} />}
            <div className='h-[1px] my-2 w-[90%] mx-auto bg-gray-300'></div>
        </React.Fragment>

    )

}

export default ProductPage