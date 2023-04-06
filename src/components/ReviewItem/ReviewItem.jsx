import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product }) => {
  const { img, name, id, price, quantity } = product;
  return (
    <div className="review-item">
      <div className="review-product-details">
        <img className="img-review" src={img} alt="" />
        <div>
          <p className="product-name">{name}</p>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
        </div>
      </div>
      <div>
        <button>d</button>
      </div>
    </div>
  );
};

export default ReviewItem;
