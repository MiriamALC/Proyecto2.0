import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Componentes/login/login.component';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { ComprasComponent } from './Componentes/compras/compras.component';
import { EComprasComponent } from './Componentes/ecompras/ecompras.component';
import { EDComprasComponent } from './Componentes/edcompras/edcompras.component';
import { VentasComponent } from './Componentes/ventas/ventas.component';


const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Compras', component: ComprasComponent},
  {path: 'ECompras', component: EComprasComponent},
  {path: 'EDCompras/:id', component: EDComprasComponent},
  {path: 'Ventas', component: VentasComponent},
  {path: '', pathMatch: 'full', redirectTo: 'Login'},
  {path: '**', pathMatch: 'full', redirectTo: 'Login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
