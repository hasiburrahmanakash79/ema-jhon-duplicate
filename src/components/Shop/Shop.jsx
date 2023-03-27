import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products, setProducts] = useState([])

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const [cart, setCart] = useState([])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product ={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="product-summary">
                <h2>Order summary</h2>
                <div>
                    <h4>Selected Items: {cart.length}</h4>
                </div>
            </div>
        </div>
    );
};

export default Shop;