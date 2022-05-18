import React, { useEffect, useState } from "react";
import { getProducts, currency } from "./products";
import { addToCart, useLoggedIn } from "cart/cart";
const HomeContent = () => {
  const loggedIn = useLoggedIn();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div className="grid grid-cols-4 gap-5 mt-10">
      {products.map((product, i) => (
        <div key={i + product.id}>
          <img src={product.image} alt={product.name} />
          <div className="flex items-center mt-3">
            <div className="flex-grow font-normal text-lg">
              <a href={`#`}>{product.name}</a>
            </div>
            <div className="flex-end font-normal text-lg">
              {currency.format(product.price)}
            </div>
          </div>
          {loggedIn && (
            <div className="text-right mt-2">
              <button
                className="bg-blue-500 px-3 py-2 text-white text-base rounded-sm hover:bg-blue-700"
                onClick={() => addToCart(product.id)}
                id={`addtocart_${product.id}`}
              >
                Add To Cart
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeContent;
