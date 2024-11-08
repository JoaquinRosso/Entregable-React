import React, { useState, useEffect } from "react";
import ProductFromCart from "./ProductFromCart";

function ShoppingCart({ cartItem, setCartItem }) {
  const [counter, setCounter] = useState({});

  useEffect(() => {
    const countOccurrences = cartItem.reduce((counterMap, product) => {
      counterMap[product.id] = (counterMap[product.id] || 0) + 1;
      return counterMap;
    }, {});
    setCounter(countOccurrences);
  }, [cartItem]);

  const handleOnClick = (productId) => {
    setCartItem((prevCart) => {
      const updatedCart = [];

      let found = false;

      for (const product of prevCart) {
        if (product.id === productId && !found) {
          if (counter[productId] > 1) {
            updatedCart.push(product);
          }
          found = true;
        } else {
          updatedCart.push(product);
        }
      }

      return updatedCart.filter((product) => counter[product.id] > 0);
    });
  };

  // Calculate total price
  const totalPrice = Object.keys(counter).reduce((total, productId) => {
    const product = cartItem.find(
      (product) => product.id === parseInt(productId)
    );
    if (product) {
      const productQuantity = counter[productId];
      return total + product.unitPrice * productQuantity;
    }
    return total;
  }, 0);

  const uniqueProducts = Object.keys(counter).map((productId) => {
    return cartItem.find((product) => product.id === parseInt(productId));
  });

  return (
    <>
      <h2>Shopping Cart</h2>
      <div className="shopping-cart">
        {uniqueProducts.map((product) => {
          const RepCounter = counter[product.id];
          return (
            <ProductFromCart
              product={product}
              key={product.id}
              RepCounter={RepCounter}
              handleOnClick={handleOnClick}
            />
          );
        })}
      </div>
      <div style={{ marginTop: "20px", fontWeight: "bold" }}>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
    </>
  );
}

export default ShoppingCart;
