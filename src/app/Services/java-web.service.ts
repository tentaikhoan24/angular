import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"
import { Product } from 'src/models/Product'


import { environment } from 'src/environments/environment'
const URL_API = environment.URL_API

@Injectable({
  providedIn: 'root'
})
export class JavaWebService {

  constructor(private http: HttpClient) { }

  //=======
  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${URL_API}/products`)
  }
}
