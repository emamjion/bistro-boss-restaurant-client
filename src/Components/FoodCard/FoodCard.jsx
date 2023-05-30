import React from 'react';
import Button from '../Button/Button';

const FoodCard = ({item}) => {
    const {  price, recipe, name, image } = item || {};
    
    
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
                    <Button button={'ADD To CART'} />
                </div>
            </div>
        </div>
    );
};

export default FoodCard;        