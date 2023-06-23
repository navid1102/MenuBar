import { count } from "rxjs";
import * as InterfacesN from '../interfaces/basket'

export class Basket implements InterfacesN.Basket {
    name: string;
    price: number;
    cont: number;
    public plus(): void {

        if (this.cont < 100)
            this.cont++;
    }

    public minus(): void {
        if (this.cont > 0)
            this.cont--;
    }

    public getSubTotal(): number {

        let result: number = this.cont * this.price
        if (this.cont >= 5) {

            result *= 0.95;
        }
        return result;
    }


    constructor(name: string, price: number, count: number) {
        this.price = price;
        this.cont = count;
        this.name = name;
    }







}