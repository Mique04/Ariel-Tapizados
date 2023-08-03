import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ariel-Tapizados';
  public dataLoaded: boolean = false;

  @HostListener('window:load', ['$event'])
  onWindowLoad(event: Event) {
    this.dataLoaded = true;
  }
}
