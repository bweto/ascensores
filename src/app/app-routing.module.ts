import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'datos-generales', loadChildren: './datos-generales/datos-generales.module#DatosGeneralesPageModule' },
  { path: 'add-datos-generales', loadChildren: './add-datos-generales/add-datos-generales.module#AddDatosGeneralesPageModule' },
  { path: 'add-datos-generales:id', loadChildren: './add-datos-generales/add-datos-generales.module#AddDatosGeneralesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
