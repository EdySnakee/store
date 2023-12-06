import { Component, ElementRef, Input, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrls: ['./wave-audio.component.css']
})
export class WaveAudioComponent {

  @Input({required: true}) audioUrl! : string;
  @ViewChild('wave') container!: ElementRef;
  private ws!: WaveSurfer;
  isPlay = signal(false);

  ngAfterViewInit(){
    this.ws = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement
    })
    this.ws.on('play', ()=> this.isPlay.set(true));
    this.ws.on('pause', ()=> this.isPlay.set(false));
  }

  playPause(){
    this.ws.playPause();
  }



}
