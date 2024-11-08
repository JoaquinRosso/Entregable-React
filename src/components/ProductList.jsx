import ProductFromList from "./ProductFromList";

function ProductList({ item, cartItem, setCartItem }) {
  return (
    <>
      <h2>Product list</h2>
      <div className="product-list">
        {item.map((product) => {
          return (
            <ProductFromList
              key={product.id}
              cartItem={cartItem}
              setCartItem={setCartItem}
              item={product}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductList;
