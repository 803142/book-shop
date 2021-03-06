import { Injectable } from '@angular/core';

import { ICartData, ICartProduct } from '../models/cart-data.model';
import { IBook } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartData: ICartData = { cartProducts: [], totalQuantity: 0, totalSum: 0 };

  addBook(book: IBook): void {
    const { id, name, price } = book;
    let existItem = this.cartData.cartProducts.find((item) => item.id === id);
    if (existItem) {
      existItem = { ...existItem, count: existItem.count + 1 };
    } else {
      existItem = { id, name, price, count: 1 };
    }
    this.cartData.cartProducts = this.cartData.cartProducts.filter((item) => item.id !== id);
    this.cartData.cartProducts.push(existItem);
  }

  getCartData(): ICartData {
    return this.cartData;
  }

  removeBook(item: ICartProduct): void {
    this.cartData.cartProducts = this.cartData.cartProducts.filter(
      (product) => product.id !== item.id,
    );
  }

  increaseQuantity(item: ICartProduct): void {
    this.removeBook(item);
    this.cartData.cartProducts.push({ ...item, count: item.count + 1 });
  }

  decreaseQuantity(item: ICartProduct): void {
    this.removeBook(item);
    this.cartData.cartProducts.push({ ...item, count: item.count - 1 });
  }

  updateCartData(): void {
    this.cartData.totalQuantity = this.cartData.cartProducts.reduce(
      (acc, item) => acc + item.count,
      0,
    );
    this.cartData.totalSum = this.cartData.cartProducts.reduce(
      (acc, item) => acc + item.count * item.price,
      0,
    );
  }
}
