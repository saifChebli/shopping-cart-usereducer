import React from 'react'
import {ShoppingCart, ToggleLeft} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'
const Navbar = () => {
    const { state } = useCart();
    const totalItem = state.cart.reduce((acc, sum) => acc + sum.quantity, 0);

    const {theme, changeTheme} = useTheme();
    console.log(theme)
    return (
        <nav className='flex justify-between p-4 bg-gray-500 items-center'>
            <Link to = '/'><h1>STYLEBUY</h1></Link>
            <Link to = '/shoppingCart'><span>{totalItem}</span><ShoppingCart /></Link>
            <ToggleLeft onClick={()=> changeTheme()} className='cursor-pointer' />
            
        </nav>
    )
}

export default Navbar