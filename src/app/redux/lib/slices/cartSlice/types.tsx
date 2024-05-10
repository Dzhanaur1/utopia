export interface CartSliceState extends CartProduct {
  products: CartProduct[];
  totalPrice: number;
}
