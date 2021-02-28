import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartItem } from 'src/app/models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() cart: ICartItem[] | [] | undefined;

  @Output() encreaseCartItemEvent = new EventEmitter<number>();

  @Output() decreaseCartItemEvent = new EventEmitter<number>();

  @Output() deleteCartItemEvent = new EventEmitter<number>();

  encrease(index: number) {
    this.encreaseCartItemEvent.emit(index);
  }

  decrease(index: number) {
    this.decreaseCartItemEvent.emit(index);
  }

  delete(index: number) {
    this.deleteCartItemEvent.emit(index);
  }
}
