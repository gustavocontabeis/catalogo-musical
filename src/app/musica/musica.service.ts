import { Musica } from './musica';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + '/musicas';
  }

  adicionar(musica: Musica) {
    console.log('adicionar', musica);
    return this.httpClient.post(this.apiUrl, musica);
  }

  buscar(id: number) {
    console.log('buscar', this.apiUrl);
    return this.httpClient.get(this.apiUrl + '/' + id);
  }

  consultar() {
    console.log('consultar', this.apiUrl);
    return this.httpClient.get(this.apiUrl);
  }

  excluir(musica: Musica) {
    console.log('excluir', musica);
    return this.httpClient.delete(this.apiUrl + '/' + musica.id);
  }

  buscarPorAlbum(idAlbum: number) {
    console.log('buscar por idAlbum', idAlbum);
    return this.httpClient.get(this.apiUrl + '/album/' + idAlbum);
  }

}

