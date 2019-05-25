module.exports = function () {
    return {
        puertas:[
            {"caracteristicas tecnicas":{
                "tipo de puerta":{ "opciones": [ 'Basculante', 'Bastíente', 'Corredera',
                                                 'Enrrollable', 'Plegable', 'Secciona', 'Peatonal' 
                                               ],
                                   "tipo de accionamiento":'',
                                   "Paso libre": {"ancho":'', "alto":''}
                                 },
                "Motorización": { "opciones": ['Elecgromecánica', 'Hidráulica', 'Neumática'],
                                  "Marca del operador": '',
                                  "Si transmisión por cadena": { "un lado": '', "dos lados": ''}
                                },
                "Control de acceso":{ "opciones": ['Estación de mando', 'Sensores de proximidad'],
                                      "Hoja Ciega (sin visor)":'',
                                      "hoja barrotes":'',
                                      "identificación de la puerta electrica": ''
                                    }
                } 
            },
        ]
     };
};