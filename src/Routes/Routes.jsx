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
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers';
import AddItem from '../Pages/Dashboard/AddItem/AddItem';
import AdminRoute from './AdminRoute';
import ManageItems from '../Pages/Dashboard/ManageItems/ManageItems';

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
        element: <PrivateRoute> <Dashboard/> </PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <MyCart/>
            },
            {
                path: 'all-users',
                element: <AllUsers/>
            },
            {
                path : 'add-item',
                element: <AdminRoute> <AddItem/> </AdminRoute>
            },
            {
                path: 'manage-items',
                element: <AdminRoute> <ManageItems/> </AdminRoute>
            }
        ]
    }
]);

export default router;