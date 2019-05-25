import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DatosGeneralesPage } from './datos-generales.page';

const routes: Routes = [
  {
    path: '',
    component: DatosGeneralesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DatosGeneralesPage]
})
export class DatosGeneralesPageModule {}
