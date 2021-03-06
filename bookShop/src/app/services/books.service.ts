import { Injectable } from '@angular/core';

import { IBook } from '../models/book.model';
import { booksJSON } from '../books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: IBook[] = JSON.parse(booksJSON);

  getBooks(): IBook[] {
    return this.books;
  }
}
