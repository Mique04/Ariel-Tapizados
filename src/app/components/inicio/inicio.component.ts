import { Component } from '@angular/core';
import { FadeIn2SecService } from 'src/app/servicios/fade-in-2-sec/fade-in-2-sec.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  public fadeService: FadeIn2SecService;

  constructor(fadeIn2SecService: FadeIn2SecService) {
    this.fadeService = fadeIn2SecService;
  }
}
