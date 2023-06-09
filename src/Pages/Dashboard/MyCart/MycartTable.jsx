import { normalizeUnits } from 'moment/moment';
import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

const MycartTable = ({index, item, refetch}) => {
    const { image, name, price, _id } = item;
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
                fetch(`https://bistro-boss-restaurant-server-kappa.vercel.app/carts/${item._id}`, {
                    method : 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
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
        <tr>
            <th>
                <label>
                    <span>{index + 1}</span>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td> ${price} </td>
            <th>
                <button onClick={() => handleDelete(item)} className="btn btn-lg bg-red-500 border-0"> < FaTrashAlt /> </button>
            </th>
        </tr>
    );
};

export default MycartTable;