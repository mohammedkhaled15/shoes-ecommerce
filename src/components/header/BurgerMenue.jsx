import React, { useContext } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { appContext } from '../../context/ShoppingContext';

function BurgerMenue() {
    const { handleBurgerClick } = useContext(appContext)
    return (
        <div className='flex items-center cursor-pointer' onClick={handleBurgerClick}><AiOutlineMenu size={"25px"} fill='#000' /></div>
    )
}

export default BurgerMenue