import React from 'react';
import HelmetCompo from '../../../Components/Helmet/HelmetCompo';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import useCart from '../../../Hooks/useCart';


// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [ cart ] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    
    return (
        <div className='mt-20'>
            <HelmetCompo
                title={'Bistro Boss | Dashboard | Payment'}
            />
            <SectionTitle
                subHeading={'Please procced to Payment'}
                heading={'Payment'}
            />
            <div className='px-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm 
                        price={price}
                        cart={cart}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;