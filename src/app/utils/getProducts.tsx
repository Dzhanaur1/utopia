export const getProudcts = async (category: string) => {
  const baseURL = window.location.origin;
  const products = await fetch(`/api/products/${category}`);
  return products.json();
};
