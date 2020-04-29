import { Intrumento } from './intrumento';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntrumentoService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + '/intrumentos';
  }

  adicionar(intrumento: Intrumento) {
    console.log('adicionar', intrumento);
    return this.httpClient.post(this.apiUrl, intrumento);
  }

  buscar(id: number) {
    console.log('buscar', this.apiUrl);
    return this.httpClient.get(this.apiUrl + '/' + id);
  }

  consultar() {
    console.log('consultar', this.apiUrl);
    return this.httpClient.get(this.apiUrl);
  }

  excluir(intrumento: Intrumento) {
    console.log('excluir', intrumento);
    return this.httpClient.delete(this.apiUrl + '/' + intrumento.id);
  }

}

