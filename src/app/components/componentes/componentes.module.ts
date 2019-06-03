import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPreguntasComponent } from './card-preguntas/card-preguntas.component';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [CardPreguntasComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CardPreguntasComponent
  ]
})
export class ComponentesModule { }
