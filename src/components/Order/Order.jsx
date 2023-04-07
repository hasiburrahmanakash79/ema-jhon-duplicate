import React, { useState } from "react";
import './Order.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import Summary from "../Summary/Summary";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Order = () => {
    const products = useLoaderData()
    const [cart, setCart] = useState(products)

    // console.log(products);

    const handleRemoveItem =(id)=>{
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }
    
    const handleDeleteCartFromDB =()=>{
        setCart([])
        deleteShoppingCart()
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
        <Summary 
        cart={cart}
        handleDeleteCartFromDB={handleDeleteCartFromDB}
        >
          <Link className="link" to='/checkout'><button className="checkout-btn">
            <span>Process to CheckOut</span>
            <FontAwesomeIcon icon={faListCheck} />
            </button>
          </Link>
        </Summary>
      </div>
    </div>
  );
};

export default Order;
