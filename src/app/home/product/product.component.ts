import { Component } from '@angular/core';
import { Product } from 'src/models/Product';
import { JavaWebService } from 'src/app/Services/java-web.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products : Product[] = []
  constructor(private javawebService:JavaWebService){}

  ngOnInit(){
    this.getProduct()
  }

  getProduct() {
    this.javawebService.getProduct().subscribe(data=>{
      this.products = data
      console.log(this.products)
    })
  }

  addCart(idProduct:number){
    const idCart = Number(localStorage.getItem("idCart"))
    // const amountProduct = document.getElementById("idProduct").value
    // this.javawebService.addCart(idCart, idProduct, amountProduct)
  }

}
