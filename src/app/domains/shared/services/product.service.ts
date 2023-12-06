import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'https://api.escuelajs.co/api/v1/products/'

  private http = inject(HttpClient);

  constructor() { }


  getProducts(){
    return this.http.get<Product[]>(this.url);
  }

  getOne(id:string){
    return this.http.get<Product>(this.url + id)
  }

}
