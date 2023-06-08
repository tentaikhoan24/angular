export class DetailCartDTO {
    id: number;
    product_name: string;
    img: string;
    amount_product: number;
    amountMax: number;
    price: number;
  
    constructor(id: number, product_name: string, img: string, amount_product: number, amountMax: number, price: number) {
      this.id = id;
      this.product_name = product_name;
      this.img = img;
      this.amount_product = amount_product;
      this.amountMax = amountMax,
        this.price = price;
    }
  }