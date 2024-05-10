export const calcTotalPrice = (products: CartProduct[]) => {
  return products.reduce((sum, obj) => {
    if (obj.count !== undefined) {
      return obj.price * obj.count + sum;
    }
    return sum;
  }, 0);
};
