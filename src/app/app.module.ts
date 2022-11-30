import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { IngresarGastoComponent } from './components/gastos/ingresar-gasto/ingresar-gasto.component';
import { ListarGastoComponent } from './components/gastos/listar-gasto/listar-gasto.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './components/proyecto2/formulario/formulario.component';
import { ListadoNoticiasComponent } from './components/proyecto2/listado-noticias/listado-noticias.component';
import { NavbarComponent } from './components/proyecto2/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    IngresarPresupuestoComponent,
    IngresarGastoComponent,
    ListarGastoComponent,
    FormularioComponent,
    ListadoNoticiasComponent,
    NavbarComponent,
    SpinnerComponent,

  ],
  //se importo nuevo el forms module que es para poder usar ngModel para formularios
  //y se importo el client module se usa para hacer llamadas a una API REST esto esta basado en observables
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
