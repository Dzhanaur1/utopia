export const getProudcts = async (category: string) => {
  const products = await fetch(
    `http://localhost:3000/api/products/${category}`
  );
  return products.json();
};
