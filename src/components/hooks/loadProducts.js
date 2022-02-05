import { useEffect, useState } from "react";

const LoadProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  console.log("load");
  console.log("load products", products);
  return [products, setProducts];
};

export default LoadProducts;
