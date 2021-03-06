import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ICartProduct } from 'src/app/models/cart-data.model';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnChanges {
  cartData = this.cartService.getCartData();

  constructor(private cartService: CartService) {}

  increaseQuantity(item: ICartProduct) {
    this.cartService.increaseQuantity(item);
  }

  decreaseQuantity(item: ICartProduct) {
    this.cartService.decreaseQuantity(item);
  }

  delete(item: ICartProduct) {
    this.cartService.removeBook(item);
  }

  updateCartData() {
    this.cartService.updateCartData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
