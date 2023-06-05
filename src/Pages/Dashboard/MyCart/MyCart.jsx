import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import HelmetCompo from '../../../Components/Helmet/HelmetCompo';
import useCart from '../../../Hooks/useCart';
import MycartTable from './MycartTable';

const MyCart = () => {
    const [ cart, refetch ] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    
    return (
        <div className='w-full px-6'>
            <HelmetCompo title={'Bistro Boss | Cart'} />
            <div>
                <SectionTitle 
                    subHeading={'my cart'}
                    heading={'wanna add more?'}
                    className='w-full'
                />
            </div>
            <div className='flex items-center justify-between gap-6 mb-6'>
                <h1 className='text-3xl text-center'>Total items: {cart.length}</h1>
                <h1 className='text-3xl text-center'>Total Price: {total}</h1>
                <button className="btn">Pay</button>
            </div>
            
            <div className=''>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <MycartTable
                                    key={item._id}
                                    index={index}
                                    item={item}
                                    refetch={refetch}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;