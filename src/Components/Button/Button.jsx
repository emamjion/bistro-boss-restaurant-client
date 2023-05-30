import React from 'react';

const Button = ({button}) => {
    return (
        <div>
            <button className="btn btn-outline font-medium bg-[#E8E8E8] text-[#BB8506] hover:text-[#BB8506] border-0 border-b-4 mt-6">{button}</button>
        </div>
    );
};

export default Button;