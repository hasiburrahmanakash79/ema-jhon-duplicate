import React from 'react';
import './Summary.css'

const Summary = (props) => {
    const cart = props.cart
    console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tex = totalPrice*5/100;
    const grandTotal = totalPrice + totalShipping + tex;
    return (
        <div className="product-summary">
            <h2>Order summary</h2>
            <div>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tex.toFixed(2)}</p>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            </div>
        </div>
    );
};

export default Summary;