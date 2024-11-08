function ProductFromCart({ product, RepCounter, handleOnClick }) {
  return (
    <div
      onClick={() => handleOnClick(product.id)}
      style={{
        cursor: "pointer",
        border: "1px solid black",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <div className="product-info">
        <span className="symbol">-</span> {}
        <p>{product.name}</p>
        <p>Price: ${product.unitPrice}</p>
      </div>
      <p>Quantity: {RepCounter}</p>
    </div>
  );
}

export default ProductFromCart;
