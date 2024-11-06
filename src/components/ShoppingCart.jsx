import ProductFromCart from "./ProductFromCart";
function ShoppingCart({ cartProduct, setCartProduct }) {
  return (
    <>
      {cartProduct.map(function (product) {
        return <ProductFromCart product={product} />;
      })}
    </>
  );
}
export default ShoppingCart;
