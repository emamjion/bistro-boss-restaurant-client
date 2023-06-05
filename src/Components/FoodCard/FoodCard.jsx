import React, { useContext } from 'react';
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2/dist/sweetalert2.js'
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';

const FoodCard = ({item}) => {
    const {  price, recipe, name, image, _id } = item || {};
    const { user } = useContext(AuthContext);
    const [ cart, refetch ] = useCart()
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (item) => {
        // console.log(item);
        if(user && user.email){
            const cartItem = { 
                menuItemId: _id,
                name,
                image,
                price,
                email : user.email
            };
            fetch('http://localhost:5000/carts', {
                method : 'POST',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch(); // refetch cart to update the number of items in the cart
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food added on the Cart',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Login to Order the Food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from : location}});
                }
            })
        }

    }
    
    return (
        <div className="card w-full bg-base-100 shadow-xl mt-12">
            <figure><img className='w-full' src={image} alt="Shoes" /></figure>
            <p className='absolute right-0 mr-4 mt-4 px-4 py-2 rounded-lg bg-[#111827] text-white'>
                ${price}
            </p>
            <div className="card-body flex items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline font-medium bg-[#E8E8E8] text-[#BB8506] hover:text-[#BB8506] border-0 border-b-4 mt-6">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;        