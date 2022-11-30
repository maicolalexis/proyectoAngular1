import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  loading = false;
  listNoticias: any[] = [];
  constructor(private _noticiaService: NoticiaService) { }

  ngOnInit(): void {
  }
  buscarNoticias(parametros: any){
    this.loading = true;
    this.listNoticias = [];
    this._noticiaService.getNoticias(parametros).subscribe(data=>{
      this.loading = false;
      console.log(data);
      this.listNoticias = data.articles;
    }, error => {
      console.log(error);
      this.loading = false;
    })
  }

}
