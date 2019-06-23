import { Pregunta } from './../model/pregunta.class';
import { PuertasService } from './../services/puertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { PuertaRepository } from '../model/puerta.repository';
@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {

  fotos: any[];
  idPregunta: number;
  idMostrar: number;
  preguntaPuerta: Pregunta;
  categoria: string;
  foto = '';
  constructor(private activatedRoute: ActivatedRoute,
              private dataPuerta: PuertaRepository,
              private camera: Camera,
              private base64: Base64
             ) {}

  ngOnInit() {
    this.idPregunta = this.activatedRoute.snapshot.params.idElementoMecanico;
    this.idMostrar = this.idPregunta;
    this.idMostrar ++;
    this.categoria = this.activatedRoute.snapshot.params.categoria;
    this.preguntaPuerta = new Pregunta('');
    this.preguntaPuerta = this.dataPuerta.getPreguntaById(this.idPregunta , this.categoria);
  }

  elegirRespuesta(event: any) {
    this.preguntaPuerta.respuesta = event.detail.value;
  }

  tomarFoto() {
    const opciones: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true
    };
    this.camera.getPicture(opciones)
    .then((imageData) => {
      this.preguntaPuerta.rutaImagen = imageData;
      this.base64.encodeFile(this.preguntaPuerta.rutaImagen)
        .then((imgBase64: string) => {
          this.foto = imgBase64;
        });
    }, (err) => {
     console.log('Camera issue:' + err);
    });
  }

  guardarObjetoPregunta() {
    this.dataPuerta.setRespuesta(this.categoria, this.preguntaPuerta, this.idPregunta);
  }

}
