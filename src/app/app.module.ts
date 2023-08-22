import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { LibroComponent } from './libro/libro.component';
import { ImagenComponent } from './imagen/imagen.component';
import { OpacidadRangoComponent } from './opacidad-rango/opacidad-rango.component';
import { FormsModule } from '@angular/forms';
import { CargaComponent } from './carga/carga.component';
import { ListadoTitulosComponent } from './listado-titulos/listado-titulos.component';
import { AntiguedadPipe } from './antiguedad.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    LibroComponent,
    ImagenComponent,
    OpacidadRangoComponent,
    CargaComponent,
    ListadoTitulosComponent,
    AntiguedadPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
