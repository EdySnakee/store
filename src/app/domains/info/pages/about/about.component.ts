import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '@shared/components/counter/counter.component';
import { HighlightDirective } from '@shared/directives/highlight.directive';
import { WaveAudioComponent } from '../../components/wave-audio/wave-audio.component';
import { HeaderComponent } from '@shared/components/header/header.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CounterComponent, WaveAudioComponent,HighlightDirective,HeaderComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  duration = signal(1000);
  message = signal('soy el signal');

  changeDuration(event : Event){
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber)
  }

  changeMessage(event : Event){
    const input = event.target as HTMLInputElement;
    this.message.set(input.value)
  }

}
