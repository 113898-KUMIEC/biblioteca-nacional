import { Component } from '@angular/core';
import { AntiguedadPipe } from '../antiguedad.pipe'; // Ajusta la ruta según la ubicación de tu pipe

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {
  libros: any[] = [
    {
      nombre: 'Cancion de hielo y fuego',
      descripcion: 'Best libre ever',
      categoria: 'Ficción',
      anioPublicacion: 2000,
      autor: 'George RR Martin'
    },
    {
      nombre: 'Harry Potter',
      descripcion: 'Libro de magos',
      categoria: 'Ficción',
      anioPublicacion: 1999,
      autor: 'JK ROWLING'
    },
    {
      nombre: 'Boca',
      descripcion: 'Mi buen amigo',
      categoria: 'Esta campaña',
      anioPublicacion: 2023,
      autor: 'volveremos a estar contigo'
    },
  ];

  incrementarAnio(libro: any) {
    libro.anioPublicacion++;
  }
  opacidad: number = 1;

  cambiarOpacidad(nuevaOpacidad: number) {
    this.opacidad = nuevaOpacidad;
  }
  mostrarLibro: boolean = true; // Variable para determinar si se muestra la mascota

  toggleMostrarLibro() {
    this.mostrarLibro = !this.mostrarLibro;
  }
}

