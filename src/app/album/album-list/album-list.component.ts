import { Router, ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { MessageService, ConfirmationService, SelectItem } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BandaService } from 'src/app/banda/banda.service';
import { Banda } from 'src/app/banda/banda';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  album: Album = new Album();
  albums: Album[];
  banda: Banda;
  exibirDialog: boolean;
  novoRegistro: boolean;

  bandas: SelectItem[] = [];
  estiloMusicals: SelectItem[] = [];
  artistas: SelectItem[] = [];
  musicas: SelectItem[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private albumService: AlbumService,
    private bandaService: BandaService) { }

  ngOnInit() {
    this.exibirDialog = false;
    this.novoRegistro = false;
    this.album = new Album();
    this.bandas = [];
    this.estiloMusicals = [{ label: 'Selecione', value: null },
    { label: 'ROCK', value: 'ROCK' },
    { label: 'HEAVY_METAL', value: 'HEAVY_METAL' },
    { label: 'HARD_ROCK', value: 'HARD_ROCK' },
    { label: 'GLAM', value: 'GLAM' },
    { label: 'ROCK_BRASILEIRO', value: 'ROCK_BRASILEIRO' },
    { label: 'COUNTRY', value: 'COUNTRY' },
    ];
    this.artistas = [];
    this.musicas = [];

    // this.buscarBanda();

    // this.buscarArtistas();
    // this.buscarMusicas();

    this.activatedRoute.params.subscribe(params => {
      if (params.id_banda) {
        const idbanda = params.id_banda ? +params.id_banda : null;
        this.banda = new Banda();
        this.banda.id = idbanda;
        this.buscarAlbumPorBanda(idbanda);
      } else {
        this.consultar();
      }
    });
 }

  buscarBanda() {
    this.bandaService.consultar().subscribe(resposta => {
      const itens = resposta as Banda[];
      itens.forEach(element => {
        this.bandas.push({ label: element.nome, value: element });
      });
    }, error => {
      console.log(error);
      alert(error.ok);
    }
    );
  }

  buscarAlbumPorBanda(idBanda: number) {
    this.albumService.buscarPorBanda(idBanda).subscribe(resposta => {
      this.albums = resposta as Album[];
    }, error => {
      console.log(error);
      alert('erro Banda.' + error);
    });
  }

  buscar(id: number) {
    this.albumService.buscar(id).subscribe(resposta => {
      this.album = resposta as Album;
    }, error => {
      console.log(error);
      alert('erro albums.' + error);
    });
  }

  consultar() {
    this.albumService.consultar().subscribe(resposta => {
      this.albums = resposta as Album[];
    }, error => {
      console.log(error);
      alert('erro albums.' + error);
    });
  }

  novo() {
    const album = new Album();
    this.exibirModal(album);
  }

  exibirModal(album: Album) {
    this.novoRegistro = true;
    this.exibirDialog = true;
    this.album = album;
  }

  salvar() {
    console.log('salvar');
    this.albumService.adicionar(this.album).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({ severity: 'success', summary: 'OK', detail: 'Registro adicionado com sucesso.' });
      this.router.navigate(['/album/album-list']);
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
        this.messageService.add({ severity: 'success', summary: 'Cancelado', detail: 'Ok. Cancelado.' });
      }
    });
  }

  excluir() {
    console.log('excluir');
    this.albumService.excluir(this.album).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({ severity: 'success', summary: 'OK', detail: 'Registro excluído com sucesso.' });
    }, error => alert('erro albums.')
    );
  }

  aoSelecionar(event) {
    this.novoRegistro = false;
  }

  onSubmit(albumForm) {

  }
}

