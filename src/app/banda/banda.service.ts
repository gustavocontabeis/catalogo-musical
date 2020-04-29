import { Banda } from './banda';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BandaService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + '/bandas';
  }

  adicionar(banda: Banda) {
    console.log('adicionar', banda);
    return this.httpClient.post(this.apiUrl, banda);
  }

  buscar(id: number) {
    console.log('buscar', this.apiUrl);
    return this.httpClient.get(this.apiUrl + '/' + id);
  }

  consultar() {
    console.log('consultar', this.apiUrl);
    return this.httpClient.get(this.apiUrl);
  }

  excluir(banda: Banda) {
    console.log('excluir', banda);
    return this.httpClient.delete(this.apiUrl + '/' + banda.id);
  }

}

