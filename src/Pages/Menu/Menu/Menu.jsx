import React from 'react';
import HelmetCompo from '../../../Components/Helmet/HelmetCompo';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';


const Menu = () => {
    return (
        <div>
            {/* Title section */}
            <HelmetCompo title={'Bistro Boss | Menu'}></HelmetCompo>

            {/* Cover section */}
            <Cover img={menuImg} title='Our Menu' />



        </div>
    );
};

export default Menu;