export const AddToCart = (props: CartProduct) => {
  const cartProduct: CartProduct = { ...props, count: 0 };
  return cartProduct;
};
