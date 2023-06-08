import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaMoneyBillAlt, FaUsers, FaBox, FaMobile } from 'react-icons/fa';

const AdminHome = () => {
    const { user } = useAuth();
    const [ axiosSecure ] = useAxiosSecure();
    
    const { data : stats = {} } = useQuery({
        queryKey: ['/admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })
    
    return (
        <div className='w-full px-8 mt-12'>
            <h1 className='text-3xl font-medium ml-6 mt-4'>HI, <span className='text-orange-500'>{user?.displayName}!</span></h1>

            <div className="stats shadow-xl m-6 mx-auto border-2 border-slate-400 w-full h-[150px]">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <span className='text-4xl'> < FaMoneyBillAlt /> </span>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">${stats.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <span className='text-4xl'> < FaUsers /> </span>
                    </div>
                    <div className="stat-title">Customers</div>
                    <div className="stat-value">{stats.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <span className='text-4xl'> < FaBox /> </span>
                    </div>
                    <div className="stat-title">Products</div>
                    <div className="stat-value">{stats.products}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <span className='text-4xl'> < FaMobile /> </span>
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;