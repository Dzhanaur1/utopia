export const getProudcts = async (category: string) => {
  const baseURL = window.location.origin;
  const products = await fetch(
    `https://utopia-git-master-dzhanaur1s-projects.vercel.app/api/products/${category}`
  );
  return products.json();
};
