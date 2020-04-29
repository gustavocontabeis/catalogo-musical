import { Album } from './album';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + '/albums';
  }

  adicionar(album: Album) {
    console.log('adicionar', album);
    return this.httpClient.post(this.apiUrl, album);
  }

  buscar(id: number) {
    console.log('buscar', this.apiUrl);
    return this.httpClient.get(this.apiUrl + '/' + id);
  }

  consultar() {
    console.log('consultar', this.apiUrl);
    return this.httpClient.get(this.apiUrl);
  }

  excluir(album: Album) {
    console.log('excluir', album);
    return this.httpClient.delete(this.apiUrl + '/' + album.id);
  }

  buscarPorBanda(idBanda: number) {
    console.log('buscar por idBanda', idBanda);
    return this.httpClient.get(this.apiUrl + '/banda/' + idBanda);
  }

}

