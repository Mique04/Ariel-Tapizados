import { Component } from '@angular/core';
import { FadeIn2SecService } from 'src/app/servicios/fade-in-2-sec/fade-in-2-sec.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  public fadeService: FadeIn2SecService;

  constructor(fadeIn2SecService: FadeIn2SecService) {
    this.fadeService = fadeIn2SecService;
  }
}
