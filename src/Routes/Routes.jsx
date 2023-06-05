import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Menu from '../Pages/Menu/Menu/Menu';
import Order from '../Pages/Order/Order/Order';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import ContactUs from '../Pages/ContactUs/ContactUs';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../Layout/Dashboard';
import MyCart from '../Pages/Dashboard/MyCart/MyCart';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/menu',
                element: <Menu/>,
            },
            {
                path: '/shop/:category',
                element: <Order/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/contact',
                element: <PrivateRoute> <ContactUs/> </PrivateRoute>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard/>,
        children: [
            {
                path: 'cart',
                element: <MyCart/>
            }
        ]
    }
]);

export default router;