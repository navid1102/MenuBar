import { Component } from '@angular/core';
import * as IBasket from './interfaces/basket'
import * as IOrder from './interfaces/order'
import * as MBasket from './models/basket'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  constructor() {

    this.items = [
      new MBasket.Basket("appel", 10, 20),
      new MBasket.Basket("orange", 22, 33),
      new MBasket.Basket("benana", 88, 2),

    ];
  }

  public items: IBasket.Basket[]

  public plus(item: IBasket.Basket): void {

    if (item.cont < 10)
      item.cont++;
  }

  public minus(item: IBasket.Basket): void {
    if (item.cont > 0)
      item.cont--;
  }

}
