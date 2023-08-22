import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'antiguedad'
})
export class AntiguedadPipe implements PipeTransform {

  transform(anioPublicacion: number): string {
    const anioActual = new Date().getFullYear();
    const antiguedad = anioActual - anioPublicacion;
    return `${antiguedad} años`;
  }

}
