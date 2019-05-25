import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddDatosGeneralesPage } from './add-datos-generales.page';

const routes: Routes = [
  {
    path: '',
    component: AddDatosGeneralesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddDatosGeneralesPage]
})
export class AddDatosGeneralesPageModule {}
