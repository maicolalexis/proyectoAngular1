import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) {

  }
  //pasamos los valores de el observable que se tomaron por parametros
  getNoticias(parametros: any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=2c5729a7273d423cb70b82e32ffb44fe';
    //funcion creada http client para pasar urls
    return this.http.get(URL);
  }
}
