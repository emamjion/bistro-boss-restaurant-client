import React from 'react';
import aboutImg from '../../../assets/home/chef-service.jpg';

const About = () => {
    return (
        // <div className='my-24 relative'>
        //     <img src={aboutImg} />
        //     <div className='text-center absolute top-[25%] right-[20%] p-12 bg-white mx-auto'> 
        //         <h1 className='uppercase text-4xl text-[#151515]'>Bistro Boss</h1>
        //         <p className='mt-2'>
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum <br /> deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto <br /> ducimus incidunt quibusdam nemo.
        //         </p>
        //     </div>
        // </div>
        <div className='my-24 about-img'>
            <div className='flex items-center justify-center h-full'> 
                <div className='bg-white p-20 text-center'>
                    <h1 className='uppercase text-4xl  text-[#151515]'>Bistro Boss</h1>
                    <p className='mt-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum <br /> deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto <br /> ducimus incidunt quibusdam nemo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;