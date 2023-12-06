import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

//usamos alias agregados desde tsconfig.json -> mas legible y mejor control
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,RouterLinkWithHref, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export default class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  @Input() category_id?: string;


  ngOnInit(){
  this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges){
      this.getProducts();
  }



  addToCart(event:Product){
    this.cartService.addToCard(event)
  }

  // PARA TRAER TODOS LOS PRODUCTOS
  private getProducts(){
    this.productService.getProducts(this.category_id)
    .subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: ()=>{
        console.log(' error:>');
      }
    })
  }


  // PARA OBTENER CATEGORIAS
  private getCategories(){
    this.categoryService.getAll()
    .subscribe({
      next: (cat)=>{
        this.categories.set(cat)
      },
      error: (err)=>{
        console.log('err :>> ', err);
      }
    })
  }


}
