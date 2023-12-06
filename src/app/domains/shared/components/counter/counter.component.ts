import { Component, Input, SimpleChanges, signal } from '@angular/core';
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
  counter = signal(0);
  refcounter: number | undefined;


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
    this.refcounter = window.setInterval(()=>{
      this.counter.update(estadoPrevio => estadoPrevio +1)
    },1000)
  }

  //SE EJECUTA DESPÚES DEL RENDER Y EL ONiNIT
  ngAfterViewInit(){
    console.log(' :>> After view ', );
  }


  //CUANDO SE DESTRUYE EL COMPONENTE
  ngOnDestroy(){
    console.log(' :>> Destroy ', );
    window.clearInterval(this.refcounter);
  }


  //DETECTAR CADA QUE CAMBIE EL INPUT
  doAlgo(){
    console.log('ALGO :>> ', );
  }


}
