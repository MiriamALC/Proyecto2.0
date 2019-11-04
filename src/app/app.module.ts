import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComprasComponent } from './Componentes/compras/compras.component';
import { EComprasComponent } from './Componentes/ecompras/ecompras.component';
import { EDComprasComponent } from './Componentes/edcompras/edcompras.component';
import { Routes } from '@angular/router';
import { VentasComponent } from './Componentes/ventas/ventas.component';

export const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'},
  {path: 'ECompras', component: EComprasComponent},
  {path: 'Compras', component: ComprasComponent},
  {path: 'EDCompras/:id', component: EDComprasComponent},
  {path: 'Ventas', component: VentasComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    MenuComponent,
    DashboardComponent,
    ComprasComponent,
    EComprasComponent,
    EDComprasComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
