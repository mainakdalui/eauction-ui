import { Product } from "./product.model";

export class Bid {
    bidAmount: number;
    product: Product;

    constructor() {
        this.bidAmount = 0;
        this.product = new Product();
    }
}