import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg';
import moment from 'moment';
import Button from '../../../Components/Button/Button';

const Featured = () => {
    return (
        <section className='my-24 featured-item pt-16 text-white'>
            <SectionTitle
                heading={'FROM OUR MENU'}
                subHeading={'Check it out'}
            />
            <div className='md:flex items-center justify-center py-20 px-36'>
                <div>
                    <img src={featured} />
                </div>
                <div className='md:ml-12 text-white'>
                    <p>{moment().format("MMMM D, YYYY")}</p>
                    <h1>WHERE CAN I GET SOME?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <Button button={'Read More'} />
                </div>
            </div>
        </section>
    );
};

export default Featured;