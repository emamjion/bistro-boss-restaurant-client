import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import slide1 from '../../../assets/home/slide1.jpg';
import Button from '../../../Components/Button/Button';

const Recommends = ({}) => {
    return (
        <section className='mt-12 mb-24'>
            <SectionTitle
                subHeading={'Should Try'}
                heading={'CHEF RECOMMENDS'}
            />
            <div className='flex items-center justify-center gap-6'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className='w-[420px] h-[300px]'>
                            <img src={slide1} className="rounded-xl w-full" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-medium">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                        <Button button={'ADD To CART'} />
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className='w-[420px] h-[300px]'>
                            <img src={slide1} className="rounded-xl w-full" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-medium">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <Button button={'ADD To CART'} />
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className='w-[420px] h-[300px]'>
                            <img src={slide1} className="rounded-xl w-full" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-medium">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <Button button={'ADD To CART'} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommends;