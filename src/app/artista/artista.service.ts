import { Artista } from './artista';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + '/artistas';
  }

  adicionar(artista: Artista) {
    console.log('adicionar', artista);
    return this.httpClient.post(this.apiUrl, artista);
  }

  buscar(id: number) {
    console.log('buscar', this.apiUrl);
    return this.httpClient.get(this.apiUrl + '/' + id);
  }

  consultar() {
    console.log('consultar', this.apiUrl);
    return this.httpClient.get(this.apiUrl);
  }

  excluir(artista: Artista) {
    console.log('excluir', artista);
    return this.httpClient.delete(this.apiUrl + '/' + artista.id);
  }

  buscarPorPaizOrigem(idPaizOrigem: number) {
    console.log('buscar por idPaizOrigem', idPaizOrigem);
    return this.httpClient.get(this.apiUrl + '/paizOrigem/' + idPaizOrigem);
  }

}

