import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Button from '../../../Components/Button/Button';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    /*
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const popularMenu = data.filter(menu => menu.category === 'popular')
            setMenu(popularMenu);
        })
    }, [])
    */

    const [ menu ] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');


    
    return (
        <section className='my-24'>
            <SectionTitle
                heading={'From Our Menu'}
                subHeading={'Check it out'}
            />
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(menu => <MenuItem
                        key={menu._id}
                        menu={menu}
                    />)
                }
            </div>
            <div className='text-center mt-12 w-[200px] mx-auto'>
                <Button
                    button={'View Full Menu'}
                ></Button>
            </div>
        </section>
    );
};

export default PopularMenu;