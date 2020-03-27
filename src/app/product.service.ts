import { Injectable } from "@angular/core";
import { product } from "./product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class ProductService {
  api = "https://5e7b1af40e04630016332b23.mockapi.io/product";
  constructor(private http: HttpClient) {}

  getProducts(): Observable<product[]> {
    return this.http.get<product[]>(this.api);
  }

  getProduct(id): Observable<product> {
    // console.log(this.api+"/"+id);
    return this.http.get<product>(this.api + "/" + id);
  }
  
}
