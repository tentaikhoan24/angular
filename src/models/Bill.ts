import {Cart} from "./Cart";
import {Account} from "./Account";

export class Bill {
  id!: number;
  cart!: Cart;
  account!: Account;
  date!: Date;
  total_bill!: number;

  constructor(id: number, cart: Cart, account: Account, date: Date, total_bill: number) {
    this.id = id;
    this.cart = cart;
    this.account = account;
    this.date = date;
    this.total_bill = total_bill;
  }
}
