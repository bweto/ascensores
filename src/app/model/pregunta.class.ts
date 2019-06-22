export class Pregunta {

    public pregunta: string;
    public respuesta: string;
    public rutaImagen: string;
    public obserevaciones: string;

    constructor(pregunta: string) {
        this.pregunta = pregunta;
        this.respuesta = '';
        this.obserevaciones = '';
    }
}
