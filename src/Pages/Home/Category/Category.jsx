import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"From 11:00am to 10:00pm"}
                heading={"ORDER ONLINE"}
            />
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper my-24"
                >
                <SwiperSlide>
                    <img src={slide1} />
                    <h2 className='text-3xl uppercase text-center text-white stroke-black -mt-16 mr-24 mb-12'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} />
                    <h2 className='text-3xl uppercase text-center text-white stroke-black -mt-16 mr-24 mb-12'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} />
                    <h2 className='text-3xl uppercase text-center text-white stroke-black -mt-16 mr-24 mb-12'>Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} />
                    <h2 className='text-3xl uppercase text-center text-white stroke-black -mt-16 mr-24 mb-12'>Deserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} />
                    <h2 className='text-3xl uppercase text-center text-white stroke-black -mt-16 mr-24 mb-12'>Salads special</h2>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;