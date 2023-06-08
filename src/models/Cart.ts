import {Account} from "./Account";

export class Cart {
  idCart!: number;
  account!: Account;
  status!: number;

  constructor(idCart: number, account: Account, status: number) {
    this.idCart = idCart;
    this.account = account;
    this.status = status;
  }
}