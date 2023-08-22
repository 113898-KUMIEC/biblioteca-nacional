import { Component } from '@angular/core';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent {
  porcentajeCarga: number = 0;
  totalLibros: number = 0;
  LibrosCargadas: number = 2;

  ngOnInit() {
    this.totalLibros = this.calcularTotalLibros(); 
    this.simularCarga();
  }

  calcularTotalLibros(): number {
    return 10;
  }

  simularCarga() {
    const intervalo = setInterval(() => {
      if (this.LibrosCargadas < this.totalLibros) {
        this.LibrosCargadas++;
        this.porcentajeCarga = (this.LibrosCargadas / this.totalLibros) * 100;
      } else {
        clearInterval(intervalo);
      }
    }, 100); 
  }
}
