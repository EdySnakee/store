import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[light]',
  standalone: true
})

// UNA DIRECTIVA ES LA MEJOR MANERA DE HACER MANIPULACION DEL  'DOOM' DE FORMA DIRECTA

export class HighlightDirective {

  element = inject(ElementRef);

  constructor() { }

  ngOnInit(){
    this.element.nativeElement.style.backgroundColor = "red";
  }

}
