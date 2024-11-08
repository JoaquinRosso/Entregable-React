function ProductFromList({ item, setCartItem }) {
  const handleAddToCart = () => {
    setCartItem((prevCart) => [...prevCart, item]);
  };
  return (
    <div onClick={handleAddToCart} style={{ cursor: "pointer" }}>
      <div className="product-info">
        <span className="symbol">+</span>
        <p>{item.name}</p>
        <p>Price: ${item.unitPrice}</p>
      </div>
    </div>
  );
}
export default ProductFromList;
