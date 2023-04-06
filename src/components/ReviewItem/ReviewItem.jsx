import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleRemoveItem }) => {
  const { img, name, id, price, quantity } = product;
  return (
    <div className="review-item">
      <div className="review-product-details">
        <img className="img-review" src={img} alt="" />
        <div>
          <p className="product-name">{name}</p>
          <p>Price: <span className="amount">${price}</span></p>
          <p>Quantity: <span className="amount">{quantity}</span></p>
        </div>
      </div>
      <div>
        <button onClick={ () =>handleRemoveItem(id)} className="btn-dlt-item">
            <FontAwesomeIcon className="delete-icon" icon= {faTrashAlt} />
            </button>
      </div>
    </div>
  );
};

export default ReviewItem;
