import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  //https://www.arquitecturajava.com/angular-input-vs-output-y-eventos/
  //ouput envia los valores que estan en el formulario al componente padre
  //eventEmitter se utiliza para emitir valores desde un componente a través del decorador @Output()
  @Output() parametrosSeleccionados = new EventEmitter<any>()
  //valores
  categoriaSeleccionada: String = 'business';
  paisSeleccionado: String = "de";
  //array
  categorias: any[] = [
    {value: 'sports', nombre: 'General'},
    {value: 'business', nombre: 'Negocios'},
  ];
  //array
  paises: any[] = [
    {value: 'de', nombre: 'Argentina'},
    {value: 'co', nombre: 'Colombia'},
  ]
  constructor() {
  }

  ngOnInit(): void {
  }
  //funcion
  buscarNoticia() {
    //creamos un array para obtener estos datos
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }
    //y emite los datos tomados
    this.parametrosSeleccionados.emit(PARAMETROS);
  }

}
