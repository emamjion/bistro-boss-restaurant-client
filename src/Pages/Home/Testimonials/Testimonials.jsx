import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://bistro-boss-restaurant-server-kappa.vercel.app/reviews')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setReviews(data);
        })
    }, [])
    
    return (
        <section className='my-24'>
            <SectionTitle 
                heading={'TESTIMONIALS'}
                subHeading={'What Our Clients Say'}
            />
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >  
                        <div className='flex flex-col items-center my-16 mx-24'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                                className='mb-8'
                            />
                            <p className='text-7xl mb-6'>
                                < FaQuoteLeft />
                            </p>
                            <p className='text-[#444444] text-xl'> {review.details} </p>
                            <h2 className='text-[#CD9003] text-3xl uppercase font-medium mt-2'> {review.name} </h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;