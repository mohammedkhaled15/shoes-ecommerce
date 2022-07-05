import { createContext, useRef, useState } from "react";

import { products } from "../data";

const appContext = createContext()

function ShoppingContext(props) {

    const [productsList, setProductsList] = useState([...products]) // products imported from data.js
    const [cartCount, setCartCount] = useState(0) // totall products in cart
    const [showCartModal, setShowCartModal] = useState() // show cart modal
    const [showMegaMenu, setShowMegaMenu] = useState(false)// show megamenu

    const imgProfileRef = useRef(null)

    const [choosenProducts, setChoosenProducts] = useState([]) // products choosen by user to show in cart

    const handleIncreament = (index) => {
        const newProductsList = [...products]
        newProductsList[index].count++
        setProductsList(newProductsList)
    }

    const handleDecreament = (index) => {
        if (products[index].count != 0) {
            const newProductsList = [...products]
            newProductsList[index].count--
            setProductsList(newProductsList)
        }
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
        <appContext.Provider value={{ cartCount, handleIncreament, handleDecreament, handleAddToCart, showCartModal, handleProfileClick, imgProfileRef, choosenProducts, handleDeleteProduct, products, setProductsList, showMegaMenu, handleBurgerClick, handlCloseMegaMenu, productsList }}>
            {props.children}
        </appContext.Provider>
    )
}

export { ShoppingContext, appContext }