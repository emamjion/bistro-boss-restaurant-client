import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='mt-12'>
            <div className='flex text-white justify-center'>
                <div className='bg-[#1F2937] flex-1 text-center flex items-center justify-center flex-col p-10'>
                    <h1 className='font-medium uppercase mb-6 pt-12 text-3xl'>Contact Us</h1>
                    <div className='text-xl font-medium'>
                        <p className='mb-2'>123 ABS Street, Uni 21, Bangladesh</p>
                        <p className='mb-2'>+88 123456789</p>
                        <p className='mb-2'>Mon - Fri: 08:00 - 22:00</p>
                        <p className=''>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                <div className='bg-[#111827] flex-1 text-center flex items-center justify-center flex-col p-10'>
                    <h1 className='font-medium mb-6 pt-12 text-3xl'>Follow Us</h1>
                    <h3 className='font-medium text-xl mb-8'>Join us on social media</h3>
                    <div id='social' className='flex items-center'>
                        <span className='mr-8 text-4xl'> < FaFacebookF /> </span>
                        <span className='mr-8 text-4xl'> < FaInstagram /> </span>
                        <span className='text-4xl'> < FaTwitter /> </span>
                    </div>
                </div>
            </div>
            <p className='text-xl text-center text-white bg-[#151515] py-4'>Copyright &copy; {(new Date().getFullYear())} CulinaryCloud. All rights reserved.</p>
        </footer>
    );
};

export default Footer;