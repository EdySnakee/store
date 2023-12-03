import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input({required:true}) duration = 0;
  @Input({required:true}) message = '';


  constructor() {
    // SE EJECUTA ANTES DEL RENDER
    console.log(' :>>Contructor', );
  }


  ngOnChanges(changes: SimpleChanges) {
    // SE EJECUTA ANTES DEL RENDER y DURANTE, DETECTA UN CAMBIO
    console.log(' :>> ',changes );
    const duration = changes['duration'];
    if (duration ){
      this.doAlgo();
    }
  }

  //SE EJECUTA UNA VEZ DESPUES DEL RENDER
  ngOnInit(){
    console.log(' :>> OnInit ', );
  }

  //SE EJECUTA DESPÚES DEL RENDER Y EL ONiNIT
  ngAfterViewInit(){
    console.log(' :>> After view ', );
  }


  //CUANDO SE DESTRUYE EL COMPONENTE
  ngOnDestroy(){
    console.log(' :>> Destroy ', );
  }


  //DETECTAR CADA QUE CAMBIE EL INPUT
  doAlgo(){
    console.log('ALGO :>> ', );
  }


}
