export const getProudcts = async (category: string) => {
  const products = await fetch(`/api/products/${category}`);
  return products.json();
};
