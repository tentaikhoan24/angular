export class Product {
    id: number;
    name_product: string;
    price: number;
    img: string;
    amount: number;
    product_type: number;
  
    constructor(id: number, name_product: string, price: number, img: string, amount: number, product_type: number) {
      this.id = id;
      this.name_product = name_product;
      this.price = price;
      this.img = img;
      this.amount = amount;
      this.product_type = product_type;
    }
  }