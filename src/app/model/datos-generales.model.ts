import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { DatosCliente,
         DatosEmpresa,
         DatosInstalacion,
         DatosProceso
} from './datos.model';

@Injectable()
export class StaticDataSource {
    private datos: any[] = [

    ];

    getDatos(): Observable<any[]> {
        return from([this.datos]);
    }

    setDatosCliente(datos: DatosCliente) {
      this.datos.push(datos);
    }

    setDatosEmpresa(datos: DatosEmpresa) {
      this.datos.push(datos);
    }

    setDatosInstalacion(datos: DatosInstalacion) {
      this.datos.push(datos);
    }

    setDatosProceso(datos: DatosProceso) {
      this.datos.push(datos);
    }

}