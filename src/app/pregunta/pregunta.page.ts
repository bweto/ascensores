import { Pregunta } from './../model/pregunta.class';
import { PuertasService } from './../services/puertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {

  fotos: any[];
  idPregunta: number;
  preguntaPuerta: Pregunta;
  categoria: string;
  foto: string = '';
  constructor(private activatedRoute: ActivatedRoute,
              private puertasService: PuertasService,
              private camera: Camera,
             // private storage: Storage
             ) {}

  ngOnInit() {
    this.puertasService.cargarFotosGrabadas();
    this.idPregunta = 0;
    this.idPregunta = this.activatedRoute.snapshot.params.idElementoMecanico;
    this.categoria = this.activatedRoute.snapshot.params.categoria;
    this.preguntaPuerta = new Pregunta('');
    this.preguntaPuerta = this.puertasService.getElementosMecanicosById(this.idPregunta);
    this.fotos = this.puertasService.getFotos;
  }

  elegirRespuesta(event: any) {
    this.preguntaPuerta.respuesta = event.detail.value;
  }

  tomarFoto() {
    const opciones: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true
    };

    this.camera.getPicture(opciones)
    .then((imageData) => {
      this.preguntaPuerta.rutaImagen = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     console.log('Camera issue:' + err);
    });
  }

  guardarObjetoPregunta() {
    this.puertasService.setObjetoPregunta(this.categoria, this.preguntaPuerta, this.idPregunta);
  }
}
