import { createContext, useRef, useState, useEffect } from "react";

import product1 from "../assets/images/image-product-1.jpg"

import { products } from "../data";

const appContext = createContext()

function ShoppingContext(props) {
    const [productsList, setProductsList] = useState([])
    const [cartCount, setCartCount] = useState(0)
    // const [imgIndic, setimgIndic] = useState(0)
    // const imgRefs = useRef([])
    // const [showFullGallery, setShowFullGallery] = useState({ show: false, product: {} })
    const [showCartModal, setShowCartModal] = useState()
    const [showMegaMenu, setShowMegaMenu] = useState(false)
    const [imgSrcs, setImgSrcs] = useState({
        heroes: [
            require("./../assets/images/image-product-1.jpg"),
            require("./../assets/images/image-product-2.jpg"),
            require("./../assets/images/image-product-3.jpg"),
            require("./../assets/images/image-product-4.jpg"),
        ],
        thumbnails: [
            require("./../assets/images/image-product-1-thumbnail.jpg"),
            require("./../assets/images/image-product-2-thumbnail.jpg"),
            require("./../assets/images/image-product-3-thumbnail.jpg"),
            require("./../assets/images/image-product-4-thumbnail.jpg"),
        ]
    })
    // const [heroImg, setHeroImg] = useState()
    const imgProfileRef = useRef(null)
    const productNameRef = useRef()
    const productPriceRef = useRef()
    const [choosenProducts, setChoosenProducts] = useState([])


    // const clickHandler = (e, index, ind) => {
    //     imgRefs.current.forEach((img, ind) => {
    //         img.classList.remove("active")
    //         if (e.target.dataset.src == ind) {
    //             img.classList.add("active")
    //         }
    //     })
    //     // console.log(products[index].heroes);
    //     // console.log(e.target.dataset.src);
    //     setHeroImg(products[index].heroes[e.target.dataset.src])
    //     setimgIndic(+e.target.dataset.src)
    // }

    const handleIncreament = (index) => {
        const newProductsList = [...products]
        newProductsList[index].count++
        setProductsList(newProductsList)
    }

    const handleDecreament = (index) => {
        const newProductsList = [...products]
        newProductsList[index].count--
        setProductsList(newProductsList)
    }


    const handleAddToCart = (product) => {
        if (product.count > 0) {
            setCartCount(prev => prev + product.count)
            if (choosenProducts.some(p => p.id === product.id)) {
                choosenProducts.map(p => p.id == product.id ? p.count = p.count + product.count : "")
            } else {

                setChoosenProducts([...choosenProducts, {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    count: product.count,
                    totalPrice: product.price - (product.price * product.discount),
                    img: product.thumbnails[0]
                }])
            }
        }
    }

    // const handleShowFullGallery = (e) => {
    //     if (window.innerWidth > "375" && !showFullGallery.show) {
    //         setShowFullGallery({ show: true, product: products[e.target.dataset.index] })
    //     }
    // }

    // const handleNext = (index, setHeroImg, imgRefs) => {
    //     if (imgIndic < 3) {
    //         let newImgIndic = imgIndic + 1
    //         setimgIndic(newImgIndic)
    //         setHeroImg(products[index].heroes[newImgIndic])
    //         imgRefs.current.forEach((img, index) => {
    //             img.classList.remove("active")
    //             if (newImgIndic == index) {
    //                 img.classList.add("active")
    //             }
    //         })
    //     }
    //     console.log(index);
    // }

    // const handlePrev = (index, setHeroImg, imgRefs) => {
    //     if (imgIndic > 0) {
    //         let newImgIndic = imgIndic - 1
    //         setimgIndic(newImgIndic)
    //         setHeroImg(products[index].heroes[newImgIndic])
    //         imgRefs.current.forEach((img, index) => {
    //             img.classList.remove("active")
    //             if (newImgIndic == index) {
    //                 img.classList.add("active")
    //             }
    //         })
    //     }
    // }

    // const handleClose = () => {
    //     setShowFullGallery(false)
    // }

    const handleProfileClick = () => {
        setShowCartModal(!showCartModal)
        imgProfileRef.current.classList.toggle("active")
    }

    const handleDeleteProduct = (productID, productCount) => {
        setCartCount(prev => prev - productCount)
        let clonedProducts = [...choosenProducts]
        let productsAfterDelete = clonedProducts.filter((product) => product.id !== productID)
        setChoosenProducts(productsAfterDelete)
    }
    const handleBurgerClick = () => {
        setShowMegaMenu(!showMegaMenu)
    }
    const handlCloseMegaMenu = () => {
        setShowMegaMenu(false)
    }
    return (
        <appContext.Provider value={{ cartCount, handleIncreament, handleDecreament, handleAddToCart, imgSrcs, showCartModal, handleProfileClick, imgProfileRef, productNameRef, choosenProducts, productPriceRef, handleDeleteProduct, products, setProductsList, showMegaMenu, handleBurgerClick, handlCloseMegaMenu }}>
            {props.children}
        </appContext.Provider>
    )
}

export { ShoppingContext, appContext }