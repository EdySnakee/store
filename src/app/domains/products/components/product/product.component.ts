import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/domains/shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeAgoPipe,RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  //EL uso del required garantiza el funcionamiendo del componente dinamico,
// si no cumple con un requerired podemos capturar el error
@Input({required: true}) product! : Product;



//Output nos permite comunicar cosas desde el HIJO hacia el PADRE, lo contrario del input
@Output() addToCard = new EventEmitter();

addToCartHandler(){
  console.log(' DESDE el HIJO:>> ' );
  this.addToCard.emit(this.product);
}









}
