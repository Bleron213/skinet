import { IOrderItem } from './../../models/order';
import { IBasketItem } from './../../models/basket';
import { BasketService } from './../../../basket/basket.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IBasket } from '../../models/basket';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {
  @Output() decrement: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() increment: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();

  @Input() items: IBasketItem[] | IOrderItem[] = [];
  @Input() isBasket = true;
  @Input() isOrder = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  decrementItemQuantity(item: IBasketItem): void {
    this.decrement.emit(item);
  }

  incrementItemQuantity(item: IBasketItem): void{
    this.increment.emit(item);
  }

  removeBasketItem(item: IBasketItem): void{
    this.remove.emit(item);
  }
}
