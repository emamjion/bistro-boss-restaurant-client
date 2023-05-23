import React from 'react';

const Button = ({button}) => {
    return (
        <div>
            <button className="btn btn-outline btn-warning border-0 border-b-4 mt-6">{button}</button>
        </div>
    );
};

export default Button;