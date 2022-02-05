import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = (props) => {
  const { name, price, quantity, img } = props.product;
  const imgStyle = {
    padding: "10px",
  };
  return (
    <div className="product">
      <div style={imgStyle}>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>

        <p>Price: {price}</p>
        <b>Quantity : {quantity}</b>

        <br />
        <button
          onClick={() => props.handleRemove(props.product.key)}
          className="btn-regular"
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Remove Item
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
