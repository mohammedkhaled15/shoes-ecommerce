import React, { useContext } from 'react'
import { appContext } from '../../context/ShoppingContext'
import CartModal from '../CartModal/CartModal'
import avatar from "./../../assets/images/image-avatar.png"
import BurgerMenue from './BurgerMenue'
import ShoppingCart from './ShoppingCart'


import { motion, AnimatePresence } from 'framer-motion'

function Header() {
    const { showCartModal, handleProfileClick, imgProfileRef, showMegaMenu, handlCloseMegaMenu } = useContext(appContext)
    return (
        <div className={`header py-3 bg-slate-100 ${window.innerWidth > "450" && "shadow-lg shadow-slate-300"} w-full`}>
            <div className={`container  mx-auto flex justify-between items-center relative`}>
                <div className='left flex flex-row gap-2'>
                    {window.innerWidth <= "450" && <BurgerMenue />}
                    <div className="logo mr-14 font-kumbh font-bold text-[2rem] flex justify-center items-center">
                        <a href='#' className=''>sneakers</a>
                    </div>
                    <AnimatePresence>
                        {showMegaMenu || window.innerWidth > "450" ? <motion.ul
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
                            exit={{ opacity: 0, x: -100, transition: { duration: 0.5 } }}
                            className={`${window.innerWidth > "450" ? "links flex flex-row gap-6 items-center" : "fixed z-10 py-4 pr-20 pl-6 left-0 top-0 h-screen bg-slate-100"}`}>
                            {showMegaMenu && window.innerWidth <= "450" && <span onClick={handlCloseMegaMenu} className='text-lg font-extrabold cursor-pointer'>x</span>}

                            {["collections", "men", "women", "about", "contact"].map((el, index) => (
                                <li key={index} className={`${window.innerWidth > "450" ? "list-item-lg" : "list-item-sm"}`}><a href=''>{el}</a></li>
                            ))}

                        </motion.ul> : ""}
                    </AnimatePresence>
                </div>
                <div className={`profile flex flex-row gap-6 items-center justify-center relative ${window.innerWidth > "450" ? "w-[10%]" : "w-1/3"}`}>
                    <ShoppingCart />
                    <div className="profile-badge cursor-pointer w-[75%]" onClick={handleProfileClick}>
                        <img src={avatar} alt="avatar" ref={imgProfileRef} className="rounded-full" />
                    </div>
                </div>
            </div>
            <AnimatePresence>{showCartModal &&
                (<motion.div
                    key={"cart-modal"}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 25, transition: { duration: 0.5, ease: 'easeInOut' } }}
                    exit={{ opacity: 0, y: -100, transition: { duration: 0.5 } }}
                    className="relative z-20"
                >
                    <CartModal />
                </motion.div>)}
            </AnimatePresence>
        </div>
    )
}

export default Header