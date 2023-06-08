export class BillDTO {
    id: number;
    name: string;
    date: Date;
    id_cart: number;
    total_bill: number;
  
    constructor(id: number, name: string, date: Date, id_cart: number, total_bill: number) {
      this.id = id;
      this.name = name;
      this.date = date;
      this.id_cart = id_cart
      this.total_bill = total_bill;
    }
  }
  