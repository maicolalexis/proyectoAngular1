import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit,  OnDestroy{
  subcription: Subscription;
  presupuesto: number;
  restante: number;
  listarGastos: any[] = [];
  constructor(private _presupuestoService: PresupuestoService) {
    this.presupuesto = 0;
    this.restante = 0;
    this.subcription = this._presupuestoService.getGastos().subscribe(data =>{
      console.log(data);
      this.restante = this.restante - data.cantidad;
      this.listarGastos.push(data);
    })
  }
  ngOnInit(): void {
  this.presupuesto = this._presupuestoService.presupuesto;
  this.restante = this._presupuestoService.restante;
  }
  ngOnDestroy(): void {
this.subcription.unsubscribe;
  }

}
