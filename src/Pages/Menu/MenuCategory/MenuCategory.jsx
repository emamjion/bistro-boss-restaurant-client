import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import Button from '../../../Components/Button/Button';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, img}) => {
    return (
        <div className='pt-12'>
            { title && <Cover img={img} title={title} />}
            <div className='grid md:grid-cols-2 gap-10 my-16'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
            <div className='text-center my-11'>
                <Link to={`/shop/${title}`}>
                    <Button button={'ORDER YOUR FAVOURITE FOOD'} />
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;