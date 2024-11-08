import React, { useState } from "react";
import "./App.css";
import groceries from "./data/groceries";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [cartItem, setCartItem] = useState([]);
  return (
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
  );
}
export default App;
