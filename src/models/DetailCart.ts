import {Cart} from "./Cart";
import {Product} from "./Product";

export class DetailCart {
  id: number;
  cart: Cart;
  product: Product;
  amount_product: number;

  constructor(id: number, cart: Cart, product: Product, amount_product: number) {
    this.id = id;
    this.cart = cart;
    this.product = product;
    this.amount_product = amount_product;
  }
}