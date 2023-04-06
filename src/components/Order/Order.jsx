import React, { useState } from "react";
import './Order.css'
import Summary from "../Summary/Summary";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/fakedb";

const Order = () => {
    const products = useLoaderData()
    const [cart, setCart] = useState(products)

    // console.log(products);

    const handleRemoveItem =(id)=>{
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }
  return (
    <div className='shop-container'>
      <div className="review-container">
        {
            cart.map(product => <ReviewItem
                key={product.id}
                product={product}
                handleRemoveItem= {handleRemoveItem}
            ></ReviewItem>)
        }
      </div>
      <div>
        <Summary cart={cart}></Summary>
      </div>
    </div>
  );
};

export default Order;
