import React, { useState } from 'react';
import HelmetCompo from '../../../Components/Helmet/HelmetCompo';
import orderBanner from '../../../assets/shop/banner2.jpg';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    

    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'offered');
    
    return (
        <div>
            <HelmetCompo title='Bistro Boss | Shop' />
            <Cover img={orderBanner} title='Our shop' />

            <div className='text-center my-24'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soup</Tab>
                        <Tab>dessert</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={dessert} />
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks} />
                    </TabPanel>
                </Tabs>
            </div>
            
        </div>
    );
};

export default Order;