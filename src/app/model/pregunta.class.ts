export class Pregunta {

    pregunta: string;
    respuesta: string;
    rutaImagen: any;
    obserevaciones: string;

    constructor(pregunta: string) {
        this.pregunta = pregunta;
        this.respuesta = '';
        this.obserevaciones = '';
    }
}
