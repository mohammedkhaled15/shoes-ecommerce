import { createContext, useRef, useState } from "react";

import product1 from "../assets/images/image-product-1.jpg"

const appContext = createContext()

function ShoppingContext(props) {
    const [productsList, setProductsList] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [heroImg, setHeroImg] = useState(product1)
    const [imgIndic, setimgIndic] = useState(0)
    const imgRefs = useRef([])
    const [showFullGallery, setShowFullGallery] = useState(false)
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
    const imgProfileRef = useRef(null)
    const productNameRef = useRef()
    const productPriceRef = useRef()
    const [choosenProducts, setChoosenProducts] = useState([])

    const clickHandler = (e) => {
        imgRefs.current.forEach((img, index) => {
            img.classList.remove("active")
            if (e.target.dataset.src == index) {
                img.classList.add("active")
            }
        })
        setHeroImg(imgSrcs.heroes[e.target.dataset.src])
        setimgIndic(+e.target.dataset.src)
    }

    const handleIncreament = (index) => {
        const newProductsList = [...productsList]
        newProductsList[index].count++
        setProductsList(newProductsList)
    }

    const handleDecreament = (index) => {
        const newProductsList = [...productsList]
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
                    totalPrice: product.price - (product.price * product.discount)
                }])
            }
        }
    }

    const handleShowFullGallery = () => {
        if (window.innerWidth > "375" && !showFullGallery) {
            setShowFullGallery(true)
        } else {

        }
    }

    const handleNext = () => {
        if (imgIndic < 3) {

            let newImgIndic = imgIndic + 1
            setimgIndic(newImgIndic)
            setHeroImg(imgSrcs.heroes[newImgIndic])

            imgRefs.current.forEach((img, index) => {
                img.classList.remove("active")
                if (newImgIndic == index) {
                    img.classList.add("active")
                }
            })
        }
    }

    const handlePrev = () => {
        if (imgIndic > 0) {

            let newImgIndic = imgIndic - 1
            setimgIndic(newImgIndic)
            setHeroImg(imgSrcs.heroes[newImgIndic])
            imgRefs.current.forEach((img, index) => {
                img.classList.remove("active")
                if (newImgIndic == index) {
                    img.classList.add("active")
                }
            })
        }
    }

    const handleClose = () => {
        setShowFullGallery(false)
    }

    const handleProfileClick = () => {
        setShowCartModal(!showCartModal)
        imgProfileRef.current.classList.toggle("active")
    }
    console.log(showCartModal)

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
        <appContext.Provider value={{ cartCount, showFullGallery, clickHandler, heroImg, imgRefs, handleIncreament, handleDecreament, handleAddToCart, handleShowFullGallery, handleNext, handlePrev, imgSrcs, handleClose, showCartModal, handleProfileClick, imgProfileRef, productNameRef, choosenProducts, productPriceRef, handleDeleteProduct, productsList, setProductsList, showMegaMenu, handleBurgerClick, handlCloseMegaMenu }}>
            {props.children}
        </appContext.Provider>
    )
}

export { ShoppingContext, appContext }