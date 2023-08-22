import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-listado-titulos',
  templateUrl: './listado-titulos.component.html',
  styleUrls: ['./listado-titulos.component.css']
})
export class ListadoTitulosComponent {
  @Input() tipo: string = 'default';
}
