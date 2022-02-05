import { useState, useEffect } from "react";
import { getStoredCart } from "../utilities/fakedb";
const loadCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (products.lenght) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);
  return [cart];
};

export default loadCart;
