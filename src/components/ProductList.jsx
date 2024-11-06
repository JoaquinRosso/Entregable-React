import ProductFromList from "./ProductFromList";
function ProductList([item, cartItem, setCartItem]) {
  return (
    <>
      <h2>Product list</h2>
      {item.map(function (item) {
        return (
          <ProductFromList
            cartItem={cartItem}
            setCartItem={setCartItem}
            item={item}
          />
        );
      })}
    </>
  );
}
export default ProductList;
