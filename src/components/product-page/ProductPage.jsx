import React, { useState, useRef, useEffect } from 'react'
import ProductDetails from './ProductDetails'
import ProductShow from './ProductShow'
import FullGallery from './../gallery/FullGallery'

function ProductPage({ product, index }) {


    const [heroImg, setHeroImg] = useState(product.heroes[0])

    const [imgIndic, setimgIndic] = useState(product.heroes.indexOf(heroImg))

    // console.log(product.heroes.indexOf(heroImg));
    const imgRefs = useRef([])

    const [showFullGallery, setShowFullGallery] = useState(false)

    useEffect(() => {
        document.body.style.overflow = `${showFullGallery ? "hidden" : "scroll"}` // prevent scrolling when full galler is open
    }, [showFullGallery])

    const handleShowFullGallery = (e) => {
        e.stopPropagation()
        if (window.innerWidth > "375" && !showFullGallery.show) {
            setShowFullGallery(true)
        }
    }

    const handleClose = () => {
        setShowFullGallery(false)
    }

    const handleNext = (e) => {
        e.stopPropagation()
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
    }

    const handlePrev = (e) => {
        e.stopPropagation()
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

    return (
        <React.Fragment key={index}>
            <div key={index} className="container mt-10 mb-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-10 md:gap-5 ">

                <ProductShow
                    heroClick={window.innerWidth > "375" ? true : false}
                    product={product}
                    index={index}
                    heroImg={heroImg}
                    setHeroImg={setHeroImg}
                    setimgIndic={setimgIndic}
                    imgIndic={imgIndic}
                    imgRefs={imgRefs}
                    handleShowFullGallery={handleShowFullGallery}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                    showFullGallery={showFullGallery} />

                <ProductDetails product={product} index={index} />

            </div>

            {showFullGallery && <FullGallery product={product} index={index} heroImg={heroImg} setHeroImg={setHeroImg} setimgIndic={setimgIndic} imgIndic={imgIndic} imgRefs={imgRefs} handleClose={handleClose} handleNext={handleNext} handlePrev={handlePrev} />}

            <div className='h-[1px] my-2 w-[90%] mx-auto bg-gray-300'></div>

        </React.Fragment>

    )

}

export default ProductPage