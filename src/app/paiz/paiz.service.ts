import { Paiz } from './paiz';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaizService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + '/paizs';
  }

  adicionar(paiz: Paiz) {
    console.log('adicionar', paiz);
    return this.httpClient.post(this.apiUrl, paiz);
  }

  buscar(id: number) {
    console.log('buscar', this.apiUrl);
    return this.httpClient.get(this.apiUrl + '/' + id);
  }

  consultar() {
    console.log('consultar', this.apiUrl);
    return this.httpClient.get(this.apiUrl);
  }

  excluir(paiz: Paiz) {
    console.log('excluir', paiz);
    return this.httpClient.delete(this.apiUrl + '/' + paiz.id);
  }

}

