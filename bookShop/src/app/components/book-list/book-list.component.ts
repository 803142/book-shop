import { Component } from '@angular/core';

import { IBook } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books = this.bookService.getBooks();

  constructor(private bookService: BooksService, private cartService: CartService) {}

  getBooks(): IBook[] {
    return this.bookService.getBooks();
  }

  adBookToCart(book: IBook): void {
    this.cartService.addBook(book);
  }
}
