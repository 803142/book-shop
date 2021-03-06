import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from 'src/app/models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input()
  book!: IBook;

  @Output() buyBookEvent = new EventEmitter<IBook>();

  buyBook(book: IBook) {
    this.buyBookEvent.emit(book);
  }
}
