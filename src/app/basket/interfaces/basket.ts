export interface Basket {
    name: string;
    price: number;
    cont: number

    plus(): void
    minus(): void
    getSubTotal(): number
}