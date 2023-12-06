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


  getProducts(category_id?:string){
    const url = new URL(this.url)
    if(category_id){
      url.searchParams.set('categoryId', category_id)
    }
    return this.http.get<Product[]>(url.toString());
  }

  getOne(id:string){
    return this.http.get<Product>(this.url + id)
  }

}
