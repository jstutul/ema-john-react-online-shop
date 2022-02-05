import React from "react";
import { useNavigate } from "react-router-dom";
import { clearTheCart, deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import LoadProducts from "../hooks/loadProducts";
import useCart from "../hooks/useCart";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  const [products] = LoadProducts();
  const [cart, setCart] = useCart(products);
  const history = useNavigate();
  const handleRemove = (key) => {
    console.log(key);
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  };

  const handlePlaceOrder = () => {
    history("/placeorder");
    setCart([]);
    clearTheCart();
  };
  return (
    <>
      <div className="shop-container">
        <div className="product-container">
          {cart.map((product) => (
            <ReviewItem
              product={product}
              handleRemove={handleRemove}
              key={product.key}
            ></ReviewItem>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <button onClick={handlePlaceOrder} className="btn-regular">
              place oder
            </button>
          </Cart>
        </div>
      </div>
    </>
  );
};

export default OrderReview;
