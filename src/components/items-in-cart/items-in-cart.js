import React from 'react';
import './items-in-cart.css';

export const ItemsInCart = ({
    quantity = 0
}) => {
    return quantity > 0 ?(
        <div color='#000' className="items-in-cart">
            { quantity }
        </div>
    ) : null
}
