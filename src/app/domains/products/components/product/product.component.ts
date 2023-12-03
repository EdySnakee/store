import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  //EL uso del required garantiza el funcionamiendo del componente dinamico,
// si no cumple con un requerired podemos capturar el error
@Input({required: true}) img: string = '';
@Input({required: true}) price: number = 0;
@Input({required: true}) title: string = '';



//Output nos permite comunicar cosas desde el HIJO hacia el PADRE, lo contrario del input
@Output() addToCard = new EventEmitter();

addToCartHandler(){
  console.log(' DESDE el HIJO:>> ' );
  this.addToCard.emit( 'soy el emit que pedo');
}









}
