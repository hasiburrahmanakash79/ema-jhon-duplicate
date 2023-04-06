import React from "react";
import './Order.css'
import Summary from "../Summary/Summary";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";

const Order = () => {
    const products = useLoaderData()
    console.log(products);
  return (
    <div className='shop-container'>
      <div className="review-container">
        {
            products.map(product => <ReviewItem
                key={product.id}
                product={product}
            ></ReviewItem>)
        }
      </div>
      <div>
        <Summary cart={products}></Summary>
      </div>
    </div>
  );
};

export default Order;
