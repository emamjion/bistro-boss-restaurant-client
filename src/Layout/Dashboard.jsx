import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaHome, FaCalendarAlt, FaMoneyCheckAlt, FaArchive, FaCalendarWeek, FaBars, FaShoppingBag, FaEnvelope, FaUtensils, FaBook, FaUsers } from "react-icons/fa";
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const [ cart ] = useCart();
    
    // TODO: Load data from the server to have dynamic isAdmin based on Data
    // const isAdmin = true;
    const [ isAdmin ] = useAdmin();


    return (
        <div className="drawer drawer-mobile lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              {/* Page content here */}
                <Outlet/>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 h-full bg-[#d1a054]">
                    <div>
                        <h1>Bistro Boss</h1>
                        <p>Restaurant</p>
                    </div>

                  {/* Sidebar content here */}
                    {
                        isAdmin ? <> 
                            <li>
                                <NavLink to='/dashboard/home'>
                                    <span> < FaHome /> </span>
                                    <span>Admin Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/add-item'>
                                    <span> < FaUtensils /> </span>
                                    <span>Add Item</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manage-items'>
                                    <span> < FaBars /> </span>
                                    <span>Manage Items</span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/manage-booking'>
                                    <span> < FaBook /> </span>
                                    <span>Manage Bookings</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/all-users'>
                                    <span> < FaUsers /> </span>
                                    <span>All Users</span>
                                </NavLink>
                            </li>
                        </> : <>
                                <li>
                                    <NavLink to='/dashboard/home'>
                                        <span> < FaHome /> </span>
                                        <span>User Home</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/reservation'>
                                        <span> < FaCalendarAlt /> </span>
                                        <span>Reservation</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='payment'>
                                        <span> < FaMoneyCheckAlt /> </span>
                                        <span>Payment History</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'>
                                        <span> < FaShoppingCart /> </span>
                                        <span>My Cart</span>
                                        <span className='badge badge-secondary'>+{cart?.length || 0}</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/review'>
                                        <span> < FaArchive /> </span>
                                        <span>Add Review</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/booking'>
                                        <span> < FaCalendarWeek /> </span>
                                        <span>My Booking</span>
                                    </NavLink>
                                </li>
                            </>
                    }
                    
                    
                    <div className="divider"></div> 
                    <li>
                        <NavLink to='/'>
                            <span> < FaHome /> </span>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'>
                            <span> < FaBars /> </span>
                            <span>Menu</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop/salad'>
                            <span> < FaShoppingBag /> </span>
                            <span>Shop</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>
                            <span> < FaEnvelope /> </span>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            
            </div>
        </div>
    );
};

export default Dashboard;