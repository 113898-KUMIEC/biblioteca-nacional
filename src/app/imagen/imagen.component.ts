import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent {
  @Input() rutaFoto: string = 'https://www.penguinlibros.com/ar/2385064-large_default/paquete-digital-cancion-de-hielo-y-fuego-5-libros.jpg';
}
