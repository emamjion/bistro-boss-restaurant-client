import React from 'react';
import HelmetCompo from '../../../Components/Helmet/HelmetCompo';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            {/* Title section */}
            <HelmetCompo title={'Bistro Boss | Menu'}></HelmetCompo>

            {/* Cover section */}
            <Cover img={menuImg} title='Our Menu' />
            
            {/* Today's offered section */}
            <SectionTitle  
                heading={"TODAY'S OFFER"}
                subHeading={"Don't miss"}
            />
            <MenuCategory
                items={offered}
            />


            {/* Dessert menu items */}
            <MenuCategory
                items={dessert}
                title="dessert"
                img={dessertImg}
            />

            {/* Pizza menu items */}
            <MenuCategory
                items={pizza}
                title="pizza"
                img={pizzaImg}
            />
            
            {/* Salad menu items */}
            <MenuCategory
                items={salad}
                title="salad"
                img={saladImg}
            />
            
            {/* Salad menu items */}
            <MenuCategory
                items={soup}
                title="soup"
                img={soupImg}
            />



        </div>
    );
};

export default Menu;