import {
  OnChanges,
  SimpleChanges,
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';

import { ICartProduct } from '../../models/cart-data.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnChanges, OnDestroy {
  @Input() item: ICartProduct | undefined;

  @Output() needUpdateData = new EventEmitter<string>(true);

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.item) {
      return;
    }
    this.needUpdateData.emit();
  }

  ngOnDestroy(): void {
    console.log('buy');
    this.needUpdateData.emit();
  }
}
