import { Router, ActivatedRoute } from '@angular/router';
import { ArtistaService } from '../artista.service';
import { Component, OnInit } from '@angular/core';
import { Artista } from '../artista';
import { MessageService, ConfirmationService, SelectItem } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@Component({
  selector: 'app-artista-list',
  templateUrl: './artista-list.component.html',
  styleUrls: ['./artista-list.component.css']
})
export class ArtistaListComponent implements OnInit {

  artista: Artista = new Artista();
  artistas: Artista[];
  exibirDialog: boolean;
  novoRegistro: boolean;

//[declaracoes]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private artistaService: ArtistaService) { }

  ngOnInit() {
    this.exibirDialog = false;
    this.novoRegistro = false;
    this.artista = new Artista();
//[ngOnInit]
//[buscarFK]
    this.activatedRoute.params.subscribe(params => {
      if (params.id_paizOrigem) {
        const idpaizOrigem = params.id_paizOrigem ? Number(params.id_paizOrigem) : null;
        this.buscarArtistaPorPaizOrigem(idpaizOrigem);
      } else {
        this.consultar();
      }
    });

  }


  buscarArtistaPorPaizOrigem(idPaizOrigem: number) {
    this.artistaService.buscarPorPaizOrigem(idPaizOrigem).subscribe(resposta => {
      this.artistas = resposta as Artista[];
    }, error => {
      console.log(error);
      alert('erro PaizOrigem.' + error);
    });
  }

  buscar(id: number) {
    this.artistaService.buscar(id).subscribe(resposta => {
      this.artista = resposta as Artista;
    }, error => {
      console.log(error);
      alert('erro artistas.' + error);
    });
  }

  consultar() {
    this.artistaService.consultar().subscribe(resposta => {
      this.artistas = resposta as Artista[];
      console.log(this.artistas);
    }, error => {
      console.log(error);
      alert('erro artistas.' + error);
    });
  }

  novo() {
    const artista = new Artista();
    this.exibirModal(artista);
  }

  exibirModal(artista: Artista) {
    this.novoRegistro = true;
    this.exibirDialog = true;
    this.artista = artista;
  }

  salvar() {
    console.log('salvar');
    this.artistaService.adicionar(this.artista).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({severity: 'success', summary: 'OK', detail: 'Registro adicionado com sucesso.'});
      this.router.navigate(['/artista/artista-list']);
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
    this.artistaService.excluir(this.artista).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({severity: 'success', summary: 'OK', detail: 'Registro excluído com sucesso.'});
      }, error => alert('erro artistas.')
    );
  }

  aoSelecionar(event) {
    this.novoRegistro = false;
  }

  onSubmit(artistaForm) {

  }

}

