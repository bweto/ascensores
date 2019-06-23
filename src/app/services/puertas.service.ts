import { Injectable } from '@angular/core';
import { Pregunta } from '../model/pregunta.class';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PuertasService {
  fotos: any[];
  elementosMecanicos: Pregunta[] = [
    new Pregunta('No se cumplen las holguras, las distancias de seguridad ni las medidas de protección establecidos en las figuras 1 a 11.'),
    new Pregunta('Existen elementos cortantes (vidrios sin pulir, aristas vivas, entre otros) en las hojas de la puerta.'),
    new Pregunta('Las partes expuestas de los bordes y las barras sensibles a la presión tienen aristas agudas o ángulos susceptibles de herir a las personas que entran en contacto con el o los dispositivos.'),
    new Pregunta('Es posible acceder al mecanismo sin una llave o herramienta.'),
    new Pregunta('Se evidencia oxidación o corrosión, o ambas, en más de 20% del área de las hojas o el marco de la puerta o ambos.'),
    new Pregunta('Las hojas de la puerta, las bisagras o los marcos están deformadas y afectan el funcionamiento normal de la puerta.'),
    new Pregunta('Las poleas están desalineadas con respecto al cable.'),
    new Pregunta('Las poleas están sin engrasar.'),
    new Pregunta('Los muelles o los resortes de freno deformados, fisurados, partidos u oxidados.'),
    new Pregunta('Las bisagras están sueltas.'),
    new Pregunta('Los cojines fisurados o partidos.'),
    new Pregunta('Se evidencia deformación de las guías y los topes.'),
    new Pregunta('Las guías de deslizamiento de la hoja móvil presentan corte o interrupción o ambos.'),
    new Pregunta('Se evidencia oxidación en cualquier punto del cable, tal que existe desprendimiento de material o se evidencie la destrucción paulatina de los hilos constitutivos del cable, por acción de agentes externos.'),
    new Pregunta('Los cables de alambre de acero no son accesibles para inspección y mantenimiento a lo largo de toda su longitud.'),
    new Pregunta('Se evidencia falla en la sujeción del sujetacables.'),
    new Pregunta('Existen empalmes en los cables.'),
    new Pregunta('Existen puntos de soldadura sueltos.'),
    new Pregunta('Existen remaches sueltos.'),
    new Pregunta('Se evidencia falta de elasticidad en cauchos protectores o presencia de rotura o ambos.'),
    new Pregunta('La puerta presenta pérdida de estabilidad, caída de piezas, caída de la hoja.'),
    new Pregunta('Existe riesgo de arrastre, enganche o corte, o ambos, provocados por la forma de hoja móvil.'),
    new Pregunta('En los sistemas de suspensión que llevan correas, estas no son accesibles para inspección o sustitución o ambos.'),
    new Pregunta('No existen medios para prevenir que las correas se desenganchen accidentalmente.'),
    new Pregunta('En puertas hidráulicas, no existen medios para proteger los equipos de las sobrepresiones, ni medios para permitir la conexión de un dispositivo de medición.'),
    new Pregunta('En los sistemas de suspensión que llevan correas, éstas no son accesibles para inspección, sustitución o ambas.'),
    new Pregunta('No existen medios para que las correas se desenganchen accidentalmente.'),
    new Pregunta('No existen dispositivos tales como manivelas, manijas o tiradores de cuerdas, sobre la parte interna y/o externa de la puerta que faciliten su movimiento en caso de maniobra manual.'),
    new Pregunta('Las guías o los recorridos no están cubiertos por guarniciones apropiadas, hasta una altura de 2,5 m por encima del nivel del suelo u otro nivel de acceso permanente.'),
    new Pregunta('La entrada de los contrapesos no es segura dentro de sus cubiertas.'),
    new Pregunta('Existe movimiento involuntario y peligroso de la hoja de puerta, si falla un elemento de suspensión del contrapeso.'),
    new Pregunta('Existe peligro para el edificio o personas en sus proximidades, como consecuencia de la caída del contrapeso.'),
    new Pregunta('No hay fijación segura a los medios de suspensión.'),
    new Pregunta('Es posible el desplazamiento accidental del contrapeso.'),
    new Pregunta('Las cadenas que llevan los sistemas de suspensión no son accesibles para la inspección y el mantenimiento a lo largo de toda su longitud.'),
    new Pregunta('No existen medios para prevenir que la cadena se desenganche accidentalmente de los piñones.'),
    new Pregunta('No está prevista una protección de los piñones de la cadena o de sus puntos de enganche, a menos de 2,5 m por encima del nivel del suelo.'),
    new Pregunta('La hoja de puerta no permanece en los rieles o elementos de guía y éstos muestran cualquier deformación permanente que afecta a su función u otros efectos negativos.'),

  ];
  instalacionElectrica: Pregunta[] = [
    new Pregunta('Falta o falla el interruptor de la alimentación.'),
    new Pregunta('No hay cherencia de los mandos.'),
    new Pregunta('se presenta visualización de falla cuando algún equipo eléctronico de la puerta tiene la pantalla o display.'),
    new Pregunta('Se evidencia falla en la electrocerradura.'),
    new Pregunta('Las baterías están descargadas (En casos de funcionar con baterías).'),
  ];
  motorización: Pregunta[] = [
   new Pregunta('La puerta no se detiene automáticamente, cuando alcanza sus posiciones límite de final de recorrido.'),
   new Pregunta('El movimiento de la puerta no se interrumpe y/o la motorización no se pone fuera de funcionamiento cuando se le de la orden de parada.'),
   new Pregunta('En puertas de rejas persiana enrollables, no se detiene la hoja ni la motorización, y/o se presenta falla en el sistema de suspensión (la hoja se descuelga por gravedad).'),
   new Pregunta('Existe la posibilidad de que queden personas atrapadas en las zonas en las que una puerta motorizada se la única salida posible, inclusoen falla de la motorización o de la alimentación de energía.'),
   new Pregunta('Se presenta falla en los anclajes del motor'),
   new Pregunta('Falta la coraza en los cableados.'),
   new Pregunta('Hay presencia de aceite derramado.'),
   new Pregunta('Las puertas motorizadas no están protegidas contra los contactos eléctricos directos e indirectos.'),
   new Pregunta('Se evidencia falla en el control de accesos para activar sistemas de apertura o cierre de la puerta.'),
   new Pregunta('La motorización o la fuente de energía utilizada para el funcionamiento motorizado evidencia recalentamiento (ailantes derretidos, decoloración, entre otros).'),
   new Pregunta('La motorización o la fuente de energía utilizada para el funcionamiento motorizado presenta riesgo de choque eléctrico (cables sin aislante o dañado, elementos eléctricos descubiertos y expuestos al usuario, entre otros.'),
   new Pregunta('En caso de falla de la motorización o de la alimentación de energía, y si la puerta es el único medio de salida, la persona atrapada no tiene la posibilidad de desplazar manualmente la hoja desconectando la motorización de la hoja de puerta o accionando la motorización por medio de medios accesibles.')
  ];
  otrasComprobaciones: Pregunta[] = [
    new Pregunta('Se evidencia presencia de grietas en la estructura donde están ubicados los puntos de apoyo de la apertura eléctrica. "La gravedad del defecto es calificada por el inspector".'),
    new Pregunta('Hay acumulación de materiales que obstaculizan la entrada o salida de la puerta (por ejemplo grasa, aceite, tierra).'),
    new Pregunta('En caso de puertas transparentes, no existe una banda opaca a lo ancho de vidrieria o mediante un adorno u otro tratamiento decorativo. "Para mayor información, consultar el código de sismo resistencia, numeral K.4.3.9.1".'),
    new Pregunta('Cuando se coloca una banda opaca de visibilidad en una puerta transparente, ésta tiene menos de 20 mm de alto y no esta localizada, de tal manera que la distancia vertical desde el nivel del piso sea no menos de 700 mm hasta el borde superior de la banda. No más de 1000 mm hasta el borde inferior de la banda.'),
    new Pregunta('La banda colocada en una puerta transparente no es fácilmente visible. Nota 1 La visibilidad se logra ya sea empleando una banda que contraste con el fondo o incrementando el ancho de la banda. Nota 2 las líneas discontinuas con diseños discontinuos son formas aceptables de bandas de advertencia. Nota 3 No se requieren bandas ni marcas en los siguientes casos: La altura del panel de vidrio no supera los 1000 mm en ninguna de sus dimensiones. El ancho del panel de vidrio no supera 500 mm de ninguna de sus dimensiones (incluye paneles individuales con vidrios a tope). No hay vidrios hasta 500 mm a partir del nivel del piso. El panel del vidrio se ha entregado con al menos un perfil firmemente asegurado, para proteger cada una de las caras del vidrio. Al menos uno de los perfiles está colocado con su borde superior a menos de 500 mm y su borde inferior a más de 100 mm sobre el nivel del piso. El ancho de la cara del perfil no es menor a 40 mm.'),
    new Pregunta('Las puertas auxiliares no se pueden abrir cuando la puerta principal está en posición cerrada.'),
    new Pregunta('Cerraduras de puertas auxiliares se encuentran inoperantes.'),
    new Pregunta('Existe peligro de que la puerta funcione en la modalidad de hombre presente (cuando este sistema exista).'),
    new Pregunta('Las puertas que abren a zonas de tráfico no disponen de un medio para la observación.'),
    new Pregunta('Se presenta movimientos involuntarios o incontrolados de la hoja de puerta debidos a influencias externas, tales como viento o agua, entre otros.'),
    new Pregunta('Se presentan movimientos de la hoja de puerta (apertura o cierre) que hacen que las personas o los objetos queden atrapados o se aplasten en cualquier posición.'),
    new Pregunta('Existe riesgo de arrastre, enganche y/o corte a los usuarios provocados por la forma de la hoja móvil.'),
    new Pregunta('Faltan instrucciones apropiadas dirigidas a las personas responsables para la operación y el uso (ejemplo, administración o vigilancia, entre otros).'),
    new Pregunta('Hay peligro de tropiezo, en caso de que existan alfombras y suelos sensibles a la presión. La distancia entre las juntas y las uniones de las alfombras y el suelo circundante es superior a 3 mm.'),
    new Pregunta('Existe separación mayor a 3 mm (horizontalmente) entre el terminado de la puerta (marco o riel) y el piso terminado de la edificación.'),
    new Pregunta('En caso de existencia de dispositivos de advertencia (sonoro-luminosos), estos no funcionan.'),
    new Pregunta('No existe o no funciona el equipo de detencción de presencia.'),
    new Pregunta('En puertas verticales, no existe dispositivo anticaída.'),
    new Pregunta('En puertas verticales, al aplicar el dispositivo anticaída, la hoja de la puerta no se detiene automáticamente dentro de la distancia de 300 mm y además, puede ser movida más hacia abajo.'),
    new Pregunta('Es posible que las personas queden atrapadas en las zonas comprendidas entre dos puertas motorizadas (por ejemplo, vestíbulos, esclusas) o en habitaciones en las que la única salida posible es una perta motorizada (por ejemplo, garajes para un solo automóvil).'),
    new Pregunta('No existe una empresa encargada del mantenimiento ni conservación del aparato, la cual haga que conste un registro de mantenimiento (contrato bitácora, reporte técnico o acta de mantenimiento, entre otros).')
  ];
  maniobrasDeSeguridad: Pregunta[] = [
    new Pregunta('Cuando se miden las fuerzas que ejerce una hoja de puerta (véase el numeral 5 de la NTC 6009 (en 12445), estas superan 150 N para fuerza estática y 400 N para la fuerza dinámica (véase anexo B, puntos de medición)). Nota Para mayor información, véase el anexo A Normativo de la NTC 5999(en 12453)).'),
    new Pregunta('No existe evidencia del ensayo establecido en el numeral 7 de la NTC 6009 (en 12445) con equipo de detección de presencia.'),
    new Pregunta('No existe evidencia del ensayo establecido en el anexo C, normativo de la presente norma, mediante equipos electro-sensitivos y/o equipos de protección sensible a la presión.'),
    new Pregunta('La puerta (cuando está diseñada de forma que abre hacia arriba y no es accionada por el modo de control de presión mantenida) puede levantar a un adulto o un niño de forma peligrosa. Esto se verifica con el siguiente ensayo: La puerta es capaz de levantar una masa de 20 Kg (o de 40 Kg en caso de puertas instaladas en zonas no accesibles al público), a partir de la posición cerrada. La masa debe estar fijada sobre la hoja de puerta en la posición más desfavorable. La dimensión máxima de la masa debe ser de 300 mm en cualquier dimensión.'),
    new Pregunta('En el caso de puertas que no funcionan bajo un control de presión mantenida, se presenta riesgo para las personas generado por el impacto de la hoja en movimiento.'),
    new Pregunta('En el caso de puertas que no funcionan bajo un control de presión mantenida, no existe una iluminación de al menos 50 luxes en la zona donde está instalada la puerta, que permita cualquier movimiento en la oscuridad.'),
    new Pregunta('En el caso de puertas que no funcionan bajo un control de presión mantenida, no existe señalización para informar a los usuarios del funcionamiento automático.'),
    new Pregunta('En el caso de puertas que no funcionan bajo un control de presión mantenidad, no hay sirenas instaladas, o no hay señales luminosas para regular el tráfico de vehículos.'),
    new Pregunta('En el caso de puertas que no funcionan bajo un control de presión mantenida, no están instalados los dispositivos suplementarios que aseguren una detencción anticipada de los vehículos, dando así a la hoja tiempo para invertir el sentido de su movimiento.'),
    new Pregunta('Al realizar el procedimiento de abrir y cerrar completamente diez veces la puerta con la velocidad de maniobra definida, se presenta alteración de las dimensiones o n forma, así como deformaciones o desgaste. Nota véase numeral 5.1.1 de la NTC 5715 (en 12605).'),
    new Pregunta('Al realizar el procedimiento de detener la hoja de puerta diez veces en diferentes posiciones durante cinco maniobras de apertura y cierre (para puertas motorizadas, cortar la alimentación del mecanismo de maniobra) la hoja de puerta no permanece en reposo tras cortar la alimentación del mecanismo de maniobra. Nota: véase numeral 5.1.4 de NTC 5715(en 12605).')
  ];
  observaciones = '';
  resultadosInspeccion: any[] = [
    {pregunta: 'Cumple, sin defectos: ',
     respuesta: ''
    },
    {pregunta: 'Cumple, con defectos leves: ',
     respuesta: ''
    },
    {pregunta: 'Condicionada, con defectos graves: ',
     respuesta: ''
    },
    {pregunta: 'No cumple, con defectos graves: ',
     respuesta: ''
    },
    {pregunta: 'No cumple, con defectos muy graves: ',
     respuesta: ''
    }


  ]

  constructor(public toastController: ToastController ) {}

  get getFotos() {
    return this.fotos;
  }

 getDataCategoria (categoria: string): Pregunta[] {
  switch (categoria) {
    case 'Elementos Mecanicos':
      return this.elementosMecanicos;
      break;
    case 'Instalación Eléctrica':
      return this.instalacionElectrica;
      break;
    case 'Motorización':
      return this.motorización;
      break;
    case 'Otras Comprobaciones':
      return this.otrasComprobaciones;
      break;
    default:
      console.log('caso no contemplado');
  }
 }

 getObservaciones (): string {
        return this.observaciones;
 }

 getResultadosInspeccion (): any[] {
  return this.resultadosInspeccion;
 }

  getElementosMecanicosById(id: number) {
    return this.elementosMecanicos[id];
  }

  setObservaciones(observacion: string) {
    this.observaciones = observacion;
    this.presentToast('Se almaceno la observación', 'success');
  }

  setResultadosInspeccion(resultadoInspeccion: any[]) {
    this.resultadosInspeccion = resultadoInspeccion;
    this.presentToast('Se almaceno los resultados de la inspección', 'success');
  }

  setObjetoPregunta(categoria: string, elemento: Pregunta, index: number ) {
    switch (categoria) {
      case 'Elementos Mecanicos':
        this.elementosMecanicos.splice(index, 1, elemento);
        break;
      case 'Instalación Eléctrica':
        this.instalacionElectrica.splice(index, 1, elemento);
        break;
      case 'Motorización':
        this.motorización.splice(index, 1, elemento);
        break;
      case 'Otras Comprobaciones':
        this.otrasComprobaciones.splice(index, 1, elemento);
        break;
      default:
        console.log('caso no contemplado');
    }
    this.presentToast(`Se almaceno la información de ${categoria} pregunta ${index + 1}`, 'success');
  }

  async presentToast( msg: string, color: string) {
    const toast = await this.toastController.create({
      message: msg,
      color: color,
      position: 'top',
      duration: 1500
    });
    toast.present();
  }


}
