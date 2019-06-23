import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticDataPuerta } from './staticDataPuerta.model';
import { PuertaRepository } from './puerta.repository';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule
  ],
  providers:[
    StaticDataPuerta,
    PuertaRepository
  ]
})
export class DataModule { }
