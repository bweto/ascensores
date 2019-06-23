import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Pregunta } from '../../../model/pregunta.class';
import { PuertaRepository } from 'src/app/model/puerta.repository';

@Component({
  selector: 'app-card-pregunta',
  templateUrl: './card-preguntas.component.html',
  styleUrls: ['./card-preguntas.component.scss'],
})
export class CardPreguntasComponent implements OnInit {
  @Input() arregloPreguntas: Pregunta[];
  @Input() categoria: string;
  constructor(private router: Router,
              private dataSource: PuertaRepository
    ) { }

  ngOnInit() {}

  abrirPregunta(idElementoMecanico: number, categoria: string) {
    this.router.navigate(['/pregunta', {idElementoMecanico, categoria}]);
  }

  getState(id: number, categoria: string) {
    let preguntas:Pregunta[];
        preguntas = this.dataSource.getDataCategoria(categoria);
    switch (preguntas[id].respuesta) {
      case 'cumple':
        return 'success';
      break;
      case 'no aplica':
        return 'warning';
      break;
      case 'no cumple':
        return 'danger';
      break;
      default:
        return 'primary';
    }

  }

}
