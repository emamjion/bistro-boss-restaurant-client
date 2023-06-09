import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaMoneyBillAlt, FaUsers, FaBox, FaTruckMoving } from 'react-icons/fa';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const AdminHome = () => {
    const { user } = useAuth();
    const [ axiosSecure ] = useAxiosSecure();
    
    const { data : stats = {} } = useQuery({
        queryKey: ['/admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    const { data : chartData = [] } = useQuery({
        queryKey: ['chart-data'],
        queryFn: async() => {
            const res = await axiosSecure.get('/order-stats')
            return res.data;
        }
    })
    

    // for recharts
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
    
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // for pichart
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    
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
                        <span className='text-4xl'> < FaTruckMoving /> </span>
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{stats.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>

            <div className='flex'>
                <div className='w-1/2'>
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className='w-1/2'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="count"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell name={entry.category} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;