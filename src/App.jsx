import React, { useState, useEffect } from "react";
import "./App.css";
import groceries from "./data/groceries";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [cartItem, setCartItem] = useState([{ name: "unproducto" }]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <ProductList
            cartItem={cartItem}
            setCartItem={setCartItem}
            item={groceries}
          />
        </div>
        <div className="col-6">
          <ShoppingCart cartItem={cartItem} setCartItem={setCartItem} />
        </div>
      </div>
    </div>
  );
}
export default App;
