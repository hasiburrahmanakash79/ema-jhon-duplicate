import React from 'react';
import './product.css'

const Product = (props) => {
    const {img, name, price, seller, ratings, stock } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Stocked: {stock}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button className='BTN-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;