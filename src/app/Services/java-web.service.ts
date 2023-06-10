import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"
import { Product } from 'src/models/Product'
import { Account } from 'src/models/Account'


import { environment } from 'src/environments/environment'
const URL_API = environment.URL_API

@Injectable({
  providedIn: 'root'
})
export class JavaWebService {

  constructor(private http: HttpClient) { }

  //=======product
  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${URL_API}/products`)
  }

  //===account
  isLogin(account: Account):Observable<Account> {
    return this.http.post<Account>(`${URL_API}/login`, account);
  }

  isCartActive(idUser:number):Observable<number>{
    return this.http.get<number>(`${URL_API}/cartActive/${idUser}`)
  }

  register(acc:Account):Observable<Account>{
    return this.http.post<Account>(`${URL_API}/registration`, acc)
  }
  //=====cart
  addCart(idCart:number, idProduct:number, amountProduct:number) {
    this.http.get<number>(`${URL_API}/add/${idCart}/${idProduct}/${amountProduct}`)
  }
}
