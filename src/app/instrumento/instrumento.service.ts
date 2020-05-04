import { Instrumento } from './instrumento';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + '/instrumentos';
  }

  adicionar(instrumento: Instrumento) {
    console.log('adicionar', instrumento);
    return this.httpClient.post(this.apiUrl, instrumento);
  }

  buscar(id: number) {
    console.log('buscar', this.apiUrl);
    return this.httpClient.get(this.apiUrl + '/' + id);
  }

  consultar() {
    console.log('consultar', this.apiUrl);
    return this.httpClient.get(this.apiUrl);
  }

  excluir(instrumento: Instrumento) {
    console.log('excluir', instrumento);
    return this.httpClient.delete(this.apiUrl + '/' + instrumento.id);
  }

}

