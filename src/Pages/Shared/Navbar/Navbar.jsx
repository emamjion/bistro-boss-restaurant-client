import React from 'react';
import logo from '../../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaCartArrowDown, FaUserCircle } from "react-icons/fa";
import useCart from '../../../Hooks/useCart';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [ cart ] = useCart();

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => {
            console.log(error.message);
        })
    }



    return (
        <nav className='fixed z-10 flex items-center justify-between bg-[#15151580] w-[1280px] px-12 py-2 text-white'>
            <div className='flex items-center justify-center gap-3'>
                <img className='w-20 h-20' src={logo} />
                <div className='mt-6'>
                    <p className='text-3xl font-bold'>BISTRO BOSS</p>
                    <p className='text-2xl font-medium'>RESTAURANT</p>
                </div>
            </div>
            <ul>
                <NavLink className='mr-6 text-lg font-medium' to='/'>Home</NavLink>
                <NavLink className='mr-6 text-lg font-medium' to='/contact'>Contact Us</NavLink>
                <NavLink className='mr-6 text-lg font-medium' to='/dashboard'>Dashboard</NavLink>
                <NavLink className='mr-6 text-lg font-medium' to='/menu'>Our Menu</NavLink>
                <NavLink className='mr-6 text-lg font-medium' to='/shop/salad'>Our Shop</NavLink>
                <NavLink className='inline-block mr-6' to='/dashboard/cart'> 
                    <span className='inline-block'> < FaCartArrowDown /> </span>
                    <span className='badge badge-secondary ml-3'>+{cart?.length || 0}</span>
                </NavLink>
                <Link to='/login' className=''>
                    {
                        user ? <>
                            <span className='mr-3 text-lg font-medium'>{user?.displayName}</span>
                            <span onClick={handleLogOut} className='text-lg font-medium'>SIGN OUT</span>
                        </> : <>
                            <span className='text-lg font-medium'>SIGN IN</span>
                            <span className='inline-block ml-2'> < FaUserCircle /> </span>
                        </>
                    }
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;