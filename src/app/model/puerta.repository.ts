import { Injectable } from '@angular/core';
import { Pregunta } from './pregunta.class';
import { StaticDataPuerta } from './staticDataPuerta.model';
import { ToastController } from '@ionic/angular';
import { Observable, from } from 'rxjs';

@Injectable()
export class PuertaRepository{
    private elementosMecanicos: Pregunta[] = [];
    private instalacionElectrica: Pregunta[] = [];
    private motorización: Pregunta[] = [];
    private otrasComprobaciones: Pregunta[] = [];
    private maniobrasDeSeguridad: Pregunta[] = [];
    private observaciones: string = '';
    private resultadosInspeccion: any[] = [];

    constructor(private dataSource: StaticDataPuerta,
                private toastController: ToastController) {
        dataSource.getElementosMecanicos()
            .subscribe( data => this.elementosMecanicos = data);
        dataSource.getInstalacionElectrica()
            .subscribe(data => this.instalacionElectrica = data);
        dataSource.getMotorización()
            .subscribe(data => this.motorización = data);
        dataSource.getOtrasComprobaciones()
            .subscribe(data => this.otrasComprobaciones = data);
        dataSource.getManiobrasDeSeguridad()
            .subscribe(data => this.maniobrasDeSeguridad = data);
        dataSource.getObservaciones()
            .subscribe(data => this.observaciones = data);
        dataSource.getResultadosInspeccion()
            .subscribe(data => this.resultadosInspeccion = data);
    }

    getElementosMecanicos(): Pregunta[] {
        return this.elementosMecanicos;
    }

    getInstalacionElectrica(): Pregunta[] {
        return this.instalacionElectrica;
    }

    getMotorización(): Pregunta[] {
        return this.motorización;
    }

    getOtrasComprobaciones(): Pregunta[] {
        return this.otrasComprobaciones;
    }

    getManiobrasDeSeguridad(): Pregunta[] {
        return this.maniobrasDeSeguridad;
    }

    getObservaciones(): string {
        return this.observaciones;
    }

    getResultadosInspeccion(): Pregunta[] {
        return this.resultadosInspeccion;
    }

    getDataCategoria( pregunta: string): Pregunta[] | string | any {
        switch (pregunta) {
            case 'Elementos Mecanicos':
                return this.getElementosMecanicos();
            break;
            case 'Instalación Eléctrica':
                return this.getInstalacionElectrica();
            break;
            case 'Motorización':
                return this.getMotorización();
            break;
            case 'Otras Comprobaciones':
                return this.getOtrasComprobaciones();
            break;
            case 'Observaciones':
                return this.getObservaciones();
            break;
            case 'Resultados inspección':
                return this.getResultadosInspeccion();
            break;
            default:
                let action = 'No hay default';
        }
    }

    getPreguntaById(id: number, categoria: string) {
        const preguntaCategoria = this.getDataCategoria(categoria);
        const pregunta = preguntaCategoria[id];
        return pregunta;
    }

    setRespuesta(categoria: string, pregunta: Pregunta, id: number) {
        let preguntaCategoria: Pregunta[] = [];
            preguntaCategoria = this.getDataCategoria(categoria);
        let posicion: number;
            posicion = id + 1;
        preguntaCategoria.splice(id, 1, pregunta);
        this.presentToast(`Se guardo la pregunta ${ posicion }`, 'success');
    }

    async presentToast( msg: string, color: string) {
        const toast = await this.toastController.create({
          message: msg,
          color: color,
          position: 'bottom',
          duration: 1000
        });
        toast.present();
      }

      getObsCategoria(categoria: string): Observable<Pregunta[]> {
        switch (categoria) {
            case 'Elementos Mecanicos':
                return from([this.getElementosMecanicos()]);
            break;
            case 'Instalación Eléctrica':
                return from([this.getInstalacionElectrica()]);
            break;
            case 'Motorización':
                return from([this.getMotorización()]);
            break;
            case 'Otras Comprobaciones':
                return from([this.getOtrasComprobaciones()]);
            break;
            default:
                let action = 'No hay default';
        }
      }

      setResultadosInspeccion(resultados: any) {
        this.resultadosInspeccion = resultados;
      }
}