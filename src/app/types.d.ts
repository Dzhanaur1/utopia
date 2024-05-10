type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  sale: boolean;
  popular: boolean;
  category_id: number;
  size: string;
  material: string;
  article: string;
};

type CartProduct = {
  id: string;
  name: string;
  image: string;
  price: number;
  size: string;
  material: string;
  count?: number;
};
// let tableHTML = "<table>";
// tableHTML +=
//   "<thead><tr><th>Имя товара</th><th>Цена</th><th>Количество</th></tr></thead>";
// tableHTML += "<tbody>";

// cartProducts.forEach((product) => {
//   //   if (product.count) {
//   //     const productPrice = product.price * product.count;

//   //   }

//   tableHTML += `<tr><td>${product.name}</td><td>${product.price}</td><td>${product.count}</td></tr>`;
// });
// tableHTML += "</tbody>";
// tableHTML += `<tfoot><tr><td colspan="2"><b>Итоговая цена</b></td><td><b>${totalPrice}</b></td></tr></tfoot>`;
// tableHTML += "</table>";
