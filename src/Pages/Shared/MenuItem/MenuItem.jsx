import React from 'react';

const MenuItem = ({item}) => {
    const { image, price, recipe, name } = item;
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius : '0 200px 200px 200px'}} className='w-[115px] h-[105px]' src={image} />
            <div className=''>
                <h2 className='text-xl text-[#151515]'>{name} ------------------ </h2>
                <p className='text-[#737373]'>
                    {recipe}
                </p>
            </div>
            <p className='text-xl text-[#BB8506]'>
                <span>$</span>
                {price}
            </p>
        </div>
    );
};

export default MenuItem;