import React from 'react';

export const TotalAmount = ({total}) => {

    return (
        <div className="label_price">
            <b className="card_total_amount">{total}</b>
        </div>
    );
};

export default TotalAmount;