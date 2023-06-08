import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
// import './CheckOutForm.css';

const CheckOutForm = ({ price, cart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [ axiosSecure ] = useAxiosSecure();
    const { user } = useAuth();
    
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionID, setTransactionID] = useState('');

    useEffect(() => {
        if(price > 0){
            axiosSecure.post('/create-payment-intent', {price})
            .then(response => {
            // console.log('Response ', response.data.clientSecret);
            setClientSecret(response.data.clientSecret);
            })
        }
    }, [price, axiosSecure]) //[price, axiosSecure]

    const handleSubmit = async(event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }
        // console.log("card",card);

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('error', error);
            setCardError(error.message);
        }
        else{
            setCardError('');
            // console.log('payment method', paymentMethod);
        }

        setProcessing(true);
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                card: card,
                billing_details: {
                email: user?.email || 'Unknown',
                name : user?.displayName || 'anonymous'
                },
            },
            },
        );
        if(confirmError){
            console.log('Confirm Error', confirmError);
        }
        console.log('Payment intent', paymentIntent);
        
        setProcessing(false);
        
        if(paymentIntent.status === 'succeeded'){
            setTransactionID(paymentIntent.id)
            // const transactionId = paymentIntent.id;
            
            // Save payment information to the server
            const payment = {
                email : user?.email,
                transactionId: paymentIntent.id,
                price,
                date : new Date(),
                quantity : cart.length,
                cartItems : cart.map(item => item._id),
                menuItems : cart.map(item => item.menuItemId),
                status : 'Service pending',
                itemName : cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    // display confirm
                }
            })
        }
    }
    return (
        <>
            <form className='px-6 w-2/3 m-8' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
            <button className='btn btn-success btn-sm mt-3' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>

        {cardError && <p className='text-red-500 font-medium ml-8'>{cardError}</p>}
        {transactionID && <p className='text-green-500 text-lg ml-8 font-medium'>Transaction Completed and Your transaction ID is : <span className='text-orange-500'>{transactionID}</span></p>}
        </>
    );
};

export default CheckOutForm;