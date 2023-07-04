import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { TrabajoComponent } from './components/trabajo/trabajo.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobreMiComponent,
    TrabajoComponent,
    TestimoniosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
