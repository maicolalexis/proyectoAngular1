import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

//rutas de los componentes
const routes: Routes = [
  { path: '', redirectTo : 'ingresarPresupuesto', pathMatch: 'full'},
  { path: 'ingresarPresupuesto', component: IngresarPresupuestoComponent},
  { path: 'gastos', component: GastosComponent},
  {path: 'proyecto2', component: SpinnerComponent},
  { path: '**', redirectTo: 'ingresarPresupuesto', pathMatch: 'full'},


];
//crea un módulo que contiene todas las directivas, las rutas dadas y el propio servicio de enrutador.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
