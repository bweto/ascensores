import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuertaPage } from './puerta.page';
import { ComponentesModule } from '../components/componentes/componentes.module';
const routes: Routes = [
  {
    path: '',
    component: PuertaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentesModule
  ],
  declarations: [PuertaPage]
})
export class PuertaPageModule {}
