import React from "react";
import "./Summary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Summary = ({ cart , handleDeleteCartFromDB}) => {

  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    if (product.quantity === 0) {
      product.quantity = 1;
    }
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;

    quantity = quantity + product.quantity;
  }
  const tex = (totalPrice * 5) / 100;
  const grandTotal = totalPrice + totalShipping + tex;
  return (
    <div className="product-summary">
      <h2>Order summary</h2>
      <div>
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Shipping Charge: ${totalShipping}</p>
        <p>Tax: ${tex.toFixed(2)}</p>
        <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
      </div>
      <button onClick={handleDeleteCartFromDB} className="btn-clear-cart">
        <span>Clear Cart</span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default Summary;
