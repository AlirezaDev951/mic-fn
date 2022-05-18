import React, { useState, useEffect, useRef } from "react";

import { getProductsById, currency } from "home/products";
import { useParams } from "react-router-dom";
import placeAddToCart from "addToCart/placeAddToCart";

const PDPContent = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const addToCart = useRef(null);

  useEffect(() => {
    if (addToCart.current) {
      placeAddToCart(addToCart.current, product.id);
    }
  }, [product]);

  useEffect(() => {
    if (id) {
      getProductsById(id).then((product) => {
        setProduct(product);
      });
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) return null;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div className="flex-grow">
        <h1 className="flex-grow font-bold text-3xl">{product.name}</h1>
        <div className="font-bold text-3xl flex-end">
          {currency.format(product.price)}
        </div>
        <div ref={addToCart} />
        <div className="mt-10">{product.description}</div>
        <div className="mt-10">{product.longDescription}</div>
      </div>
    </div>
  );
};

export default PDPContent;
