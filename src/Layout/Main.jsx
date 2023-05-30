import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const isHeaderFooter = location.pathname.includes('login');
    
    return (
        <div>
            { isHeaderFooter || <Navbar/>}
            <Outlet/>
            { isHeaderFooter || <Footer/>}
        </div>
    );
};

export default Main;