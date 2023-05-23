import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-3/12 my-12'>
            <p className='text-[#D99904] mb-4'> --- {subHeading} --- </p>
            <h1 className='text-4xl uppercase border-y-4 py-4'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;