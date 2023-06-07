import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import HelmetCompo from '../../../Components/Helmet/HelmetCompo';
import useMenu from '../../../Hooks/useMenu';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageItems = () => {
    const [ menu, , refetch ] = useMenu();
    const [ axiosSecure ] = useAxiosSecure();

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire(
                // 'Deleted!',
                // 'Your file has been deleted.',
                // 'success'
                // )
                axiosSecure.delete(`/menu/${item._id}`)
                .then(res => {
                    // console.log(res.data);
                    if(res.data.deletedCount > 0){
                        refetch();
                        Swal.fire(
                        'Deleted!',
                        'Your item has been deleted.',
                        'success'
                        )
                    }
                })

            }
        })
    }

    return (
        <div className='w-full px-6'>
            <div className='w-full'>
                <HelmetCompo
                    title={'Bistro Boss | Dashboard | Manage Items'}
                />
                <SectionTitle
                    subHeading={'Hurry Up!'}
                    heading={'Manage all Items'}
                />
            </div>
            {/* Table here */}

            <h2 className='font-semibold text-3xl mb-4'>Total Items : {menu.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) =>  <tr key={item._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-4">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img className='w-full' src={item.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.category}
                                </td>
                                <td className='text-right'>${item.price}</td>
                                <td>
                                    <button className="btn border-0 bg-[#D1A054]">
                                        <span className='text-xl'> < FaEdit /> </span>
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn border-0 bg-[#B91C1C]">
                                        <span className='text-xl'> < FaTrashAlt /> </span>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                    
                </table>
            </div>

        </div>
    );
};

export default ManageItems;