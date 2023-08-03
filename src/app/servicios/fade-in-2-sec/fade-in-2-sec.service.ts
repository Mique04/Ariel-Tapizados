import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FadeIn2SecService {
  fadeIn_sobremi: boolean = false;
  fadeIn2Sec_sobremi(): void {
    const originalState = this.fadeIn_sobremi;
    this.fadeIn_sobremi = true;
    setTimeout(() => {
      this.fadeIn_sobremi = originalState;
    }, 1500);
  }
  fadeIn_trabajo: boolean = false;
  fadeIn2Sec_trabajo(): void {
    const originalState = this.fadeIn_trabajo;
    this.fadeIn_trabajo = true;
    setTimeout(() => {
      this.fadeIn_trabajo = originalState;
    }, 1500);
  }
  fadeIn_testimonios: boolean = false;
  fadeIn2Sec_testimonios(): void {
    const originalState = this.fadeIn_testimonios;
    this.fadeIn_testimonios = true;
    setTimeout(() => {
      this.fadeIn_testimonios = originalState;
    }, 2000);
  }
}
