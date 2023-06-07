import { useQuery } from '@tanstack/react-query';
import React from 'react';
import HelmetCompo from '../../../Components/Helmet/HelmetCompo';
import { FaTrashAlt, FaUserTie } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AllUsers = () => {
    // step : 01 - axios secure ta import korte hobe
    const [ axiosSecure ] = useAxiosSecure();
    
    const { data : users = [], refetch } = useQuery(['users'], async() => {
        // step : 02 - added axiosSecure.get against fetch
        // step : 03 - remove http://localhost:5000 
        const res = await axiosSecure.get('/users');
        // step : 04 - res.json() na diye res.data likhte hobe
        return res.data;
    })

    const handleDelete = (user) => {
        console.log(user);
    };
    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method : 'PATCH',
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        })
    }
    
    return (
        <div className='w-full px-16'>
            <HelmetCompo title={'Bistro Boss | All Users'} />
            <h3 className='text-2xl font-semibold mb-4'>Total Users : {users.length}</h3>
            <div className=''>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user,index) =>  <tr key={user._id} >
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className='bg-[#D1A054] rounded btn-sm text-white'> < FaUserTie /> </button>
                                        }
                                    </td>
                                    <td><button onClick={() => handleDelete(user)} className="btn btn-sm bg-red-500 border-0"> < FaTrashAlt /> </button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;