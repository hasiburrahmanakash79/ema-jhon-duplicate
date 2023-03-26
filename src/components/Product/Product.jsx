import React from 'react';
import './product.css'

const Product = (props) => {
    const {img, name, price, seller, ratings, stock } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <h5>Price: ${price}</h5>
                <p>Stocked: {stock}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
        </div>
    );
};

export default Product;