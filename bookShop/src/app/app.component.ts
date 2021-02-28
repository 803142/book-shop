import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

import { booksJSON } from './books';
import { IBook } from './models/book.dto';
import { ICartItem } from './models/cart-item.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  title = 'bookShop';

  books: IBook[] = JSON.parse(booksJSON);

  cart: ICartItem[] = [];

  @ViewChild('appTitle')
  appTitle!: ElementRef;

  ngAfterViewInit() {
    this.appTitle.nativeElement.textContent = 'Press me';
  }

  addToCart(book: IBook) {
    const { id, name, price } = book;
    const existItem = this.cart.find((item) => item.id === id);
    if (existItem) {
      existItem.count += 1;
    } else {
      const newItem: ICartItem = { id, name, price, count: 1 };
      this.cart.push(newItem);
    }
  }

  encreaseCartItem(index: number) {
    this.cart[index].count += 1;
  }

  decreaseCartItem(index: number) {
    this.cart[index].count -= 1;
  }

  deleteCartItem(index: number) {
    this.cart.splice(index, 1);
  }
}
