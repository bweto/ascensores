import { Router } from '@angular/router';
import { PuertasService } from './../services/puertas.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Pregunta } from '../model/pregunta.class';
import { IonSegment } from '@ionic/angular';
import { PuertaRepository } from '../model/puerta.repository';
@Component({
  selector: 'app-puerta',
  templateUrl: './puerta.page.html',
  styleUrls: ['./puerta.page.scss'],
})
export class PuertaPage implements OnInit {
  @ViewChild(IonSegment) segment: IonSegment;
  elementos: Pregunta[];
  observaciones: string;
  resultadosInspeccion: any[];
  categorias: string[] = [
    'Elementos Mecanicos',
    'Instalación Eléctrica',
    'Motorización',
    'Otras Comprobaciones',
    'Observaciones',
    'Resultados inspección'
  ];
  constructor(private preguntasPuerta: PuertasService,
              private dataPuerta: PuertaRepository,
              private router: Router
    ) { }

  ngOnInit() {
    this.segment.value = this.categorias[0];
    this.cargarCategoria(this.categorias[0]);
  }

  abrirPregunta(idElementoMecanico: number) {
    this.router.navigate(['/pregunta', {idElementoMecanico}]);
  }

  cambioCategoria(event) {
    this.elementos = [];
    this.observaciones = '';
    this.resultadosInspeccion = [];
    this.cargarCategoria(event.detail.value);
  }

  cargarCategoria(categoria: string) {
    switch (categoria) {
      case 'Observaciones':
        this.observaciones = '';
        this.observaciones = this.dataPuerta.getObservaciones();
        break;
      case 'Resultados inspección':
        this.resultadosInspeccion = [];
        this.resultadosInspeccion = this.preguntasPuerta.getResultadosInspeccion();
        break;
      default:
        this.elementos = new Array<Pregunta>();
        this.elementos = this.preguntasPuerta.getDataCategoria(categoria);
    }
  }

  grabarObservaciones(event) {
    this.preguntasPuerta.setObservaciones(event.target.textContent);
  }

  GrabarResultado() {
    this.preguntasPuerta.setResultadosInspeccion(this.resultadosInspeccion);
  }
}
