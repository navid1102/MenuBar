import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as IBasket from './basket/interfaces/basket'
import * as IOrder from './basket/interfaces/order'
import * as MBasket from './basket/models/basket'

@Component({
  selector: 'app-root',
 //templateUrl: './reports/reports.component.html',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'testApp';
  constructor() {

    this.items = [
      new MBasket.Basket("appel", 10, 0),
      new MBasket.Basket("orange", 20, 0),
      new MBasket.Basket("benana", 30, 0),

    ];


    this.numbers = [];
    for (let index: number = 1; index < 10; index++) {
      this.numbers.push(index);
    }
    //this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.selectedItem = null as any;
  }

  public numbers: number[]
  public selectedItem?: number;
  public items: IBasket.Basket[]

  public plus(item: IBasket.Basket): void {

    if (item.cont < 100)
      item.cont++;
  }

  public minus(item: IBasket.Basket): void {
    if (item.cont > 0)
      item.cont--;
  }

  public getSubTotal(item: IBasket.Basket): number {

    let result: number = item.cont * item.price
    if (item.cont >= 5) {

      result *= 0.95;
    }
    return result;
  }

  public getTotal(): number {

    let total: number = 0
    for (let i: number = 0; i < this.items.length; i++) {

      let currentItem: IBasket.Basket = this.items[i];
      total += this.getSubTotal(currentItem)
    }
    return total;
  }


  public showPersonDropDown(): void {

  }

}