export interface ICartData {
  cartProducts: ICartProduct[];
  totalQuantity: number;
  totalSum: number;
}
export interface ICartProduct {
  id: string;
  name: string;
  price: number;
  count: number;
}
