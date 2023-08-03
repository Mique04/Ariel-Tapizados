import { Component } from '@angular/core';
import { FadeIn2SecService } from 'src/app/servicios/fade-in-2-sec/fade-in-2-sec.service';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.css']
})
export class TestimoniosComponent {
  public fadeService: FadeIn2SecService;

  constructor(fadeIn2SecService: FadeIn2SecService) {
    this.fadeService = fadeIn2SecService;
  }
}
