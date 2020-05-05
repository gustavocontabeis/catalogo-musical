import { Router, ActivatedRoute } from '@angular/router';
import { MusicaService } from '../musica.service';
import { Component, OnInit } from '@angular/core';
import { Musica } from '../musica';
import { MessageService, ConfirmationService, SelectItem } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@Component({
  selector: 'app-musica-list',
  templateUrl: './musica-list.component.html',
  styleUrls: ['./musica-list.component.css']
})
export class MusicaListComponent implements OnInit {

  musica: Musica = new Musica();
  musicas: Musica[];
  exibirDialog: boolean;
  novoRegistro: boolean;

//[declaracoes]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private musicaService: MusicaService) { }

  ngOnInit() {
    this.exibirDialog = false;
    this.novoRegistro = false;
    this.musica = new Musica();
//[ngOnInit]
//[buscarFK]
    this.activatedRoute.params.subscribe(params => {
      if (params.id_album) {
        const idalbum = params.id_album ? Number(params.id_album) : null;
        this.buscarMusicaPorAlbum(idalbum);
      } else {
        this.consultar();
      }
    });

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

