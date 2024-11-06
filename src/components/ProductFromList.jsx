function ProductFromList([item, setCartItem, cartItem]) {
  function handleOnClick() {
    setCartItem([...cartItem, item]);
  }
  return (
    <>
      <p
        onClick={() => {
          handleOnClick({});
        }}
      >
        {item.name} ${item.unitPrice}
      </p>
    </>
  );
}
export default ProductFromList;
