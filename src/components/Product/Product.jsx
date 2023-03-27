import React from 'react';
import './product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, price, seller, ratings, stock } = props.product

    const handleAddToCart = props.handleAddToCart

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
            <button className='BTN-cart' onClick={() => handleAddToCart(props.product)}>
                Add To Cart 
                <FontAwesomeIcon icon= {faCartShopping} />
                </button>
        </div>
    );
};

export default Product;