import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = 'https://api.escuelajs.co/api/v1/categories'
  private http = inject(HttpClient)

  constructor() { }


  // PARA TRAER TODAS LAS CATEGORIAS
  getAll(){
    return this.http.get<Category[]>(this.url)
  }


}
