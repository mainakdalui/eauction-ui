export class Product {
    bidEndDate: Date;
    category: string;
    detailDescription: string;
    productId: string;
    productName: string;
    sellerEmailId: string;
    shortDescription: string;
    startingPrice: number;

    constructor() {
        this.bidEndDate = new Date();
        this.category = '';
        this.detailDescription = '';
        this.productId = '';
        this.productName = '';
        this.sellerEmailId = '';
        this.shortDescription = '';
        this.startingPrice = 0;
    }
}