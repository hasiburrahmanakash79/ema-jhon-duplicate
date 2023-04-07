import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Product from "../Product/Product";
import Summary from "../Summary/Summary";
import "./Shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    //step-1: get id of the addedProduct in database
    for (const id in storedCart) {
      //step-2: get product from products state by using id
      const addedProduct = products.find((PD) => PD.id === id);
      //step-3: add quantity
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step-5: add the added product in saveCart
        savedCart.push(addedProduct);
      }
    }
    //step-5: set the Summary cart
    setCart(savedCart);
  }, [products]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);

    addToDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div>
        <Summary cart={cart}>
          <Link className="link" to="/order">
            <button className="review-btn">
              <span>Review Order</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </Summary>
      </div>
    </div>
  );
};

export default Shop;
