import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Pregunta } from '../../../model/pregunta.class';

@Component({
  selector: 'app-card-pregunta',
  templateUrl: './card-preguntas.component.html',
  styleUrls: ['./card-preguntas.component.scss'],
})
export class CardPreguntasComponent implements OnInit {
  @Input() arregloPreguntas: Pregunta[];
  @Input() categoria: string;
  constructor(private router: Router) { }

  ngOnInit() {}

  abrirPregunta(idElementoMecanico: number, categoria: string) {
    this.router.navigate(['/pregunta', {idElementoMecanico, categoria}]);
  }
}
