import { AlbumService } from './../../album/album.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MusicaService } from '../musica.service';
import { Component, OnInit } from '@angular/core';
import { Musica } from '../musica';
import { MessageService, ConfirmationService, SelectItem } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { Album } from 'src/app/album/album';

@Component({
  selector: 'app-musica-add',
  templateUrl: './musica-add.component.html',
  styleUrls: ['./musica-add.component.css']
})
export class MusicaAddComponent implements OnInit {

  musica: Musica = new Musica();
  musicas: Musica[];
  exibirDialog: boolean;
  novoRegistro: boolean;

  albums: SelectItem[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private musicaService: MusicaService,
    private albumService: AlbumService) { }

  ngOnInit() {
    this.exibirDialog = false;
    this.novoRegistro = false;
    this.musica = new Musica();
    this.albums = [];

    this.buscarAlbum();

    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      if (params.id) {
        const id = params.id ? Number(params.id) : null;
        this.buscar(id);
      } else if (params.id_album) {
        const idalbum = params.id_album ? Number(params.id_album) : null;
        this.buscarMusicaPorAlbum(idalbum);
      } else {
        this.consultar();
      }
    });

  }

  buscarAlbum() {
    this.albumService.consultar().subscribe(resposta => {
      const itens = resposta as Album[];
      itens.forEach(element => {
         this.albums.push({label: element.nome, value: element});
      });
      }, error => {
        console.log(error);
        alert(error.ok);
      }
    );
  }

  buscarMusicaPorAlbum(idAlbum: number) {
    this.musicaService.buscarPorAlbum(idAlbum).subscribe(resposta => {
      this.musicas = resposta as Musica[];
    }, error => {
      console.log(error);
      alert('erro Album.' + error);
    });
  }

  buscar(id: number) {
    this.musicaService.buscar(id).subscribe(resposta => {
      this.musica = resposta as Musica;
    }, error => {
      console.log(error);
      alert('erro musicas.' + error);
    });
  }

  consultar() {
    this.musicaService.consultar().subscribe(resposta => {
      this.musicas = resposta as Musica[];
    }, error => {
      console.log(error);
      alert('erro musicas.' + error);
    });
  }

  novo() {
    const musica = new Musica();
    this.exibirModal(musica);
  }

  exibirModal(musica: Musica) {
    this.novoRegistro = true;
    this.exibirDialog = true;
    this.musica = musica;
  }

  salvar() {
    console.log('salvar');
    this.musicaService.adicionar(this.musica).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({severity: 'success', summary: 'OK', detail: 'Registro adicionado com sucesso.'});
      this.router.navigate(['/musica/musica-list']);
      }, error => {
        console.log(error);
        alert(error.ok);
      }
    );
  }

  confirmarExcluir() {
    console.log('confirmarExcluir');
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir este registro?',
      accept: () => {
          console.log('confirmarExcluir - accept');
          this.excluir();
      },
      reject: () => {
          this.messageService.add({severity: 'success', summary: 'Cancelado', detail: 'Ok. Cancelado.'});
      }
    });
  }

  excluir() {
    console.log('excluir');
    this.musicaService.excluir(this.musica).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({severity: 'success', summary: 'OK', detail: 'Registro excluído com sucesso.'});
      }, error => alert('erro musicas.')
    );
  }

  aoSelecionar(event) {
    this.novoRegistro = false;
  }

  onSubmit(musicaForm) {

  }

}

