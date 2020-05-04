import { InstrumentoService } from './../../instrumento/instrumento.service';
import { PaizService } from './../../paiz/paiz.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtistaService } from '../artista.service';
import { Component, OnInit } from '@angular/core';
import { Artista } from '../artista';
import { MessageService, ConfirmationService, SelectItem } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { Instrumento } from 'src/app/instrumento/instrumento';
import { Paiz } from 'src/app/paiz/paiz';

@Component({
  selector: 'app-artista-add',
  templateUrl: './artista-add.component.html',
  styleUrls: ['./artista-add.component.css']
})
export class ArtistaAddComponent implements OnInit {

  artista: Artista = new Artista();
  artistas: Artista[];
  exibirDialog: boolean;
  novoRegistro: boolean;

  generos: SelectItem[] = [];
  paizOrigems: SelectItem[] = [];
  instrumentos: SelectItem[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private artistaService: ArtistaService,
    private paizOrigemService: PaizService,
    private instrumentoService: InstrumentoService) { }

  ngOnInit() {
    this.exibirDialog = false;
    this.novoRegistro = false;
    this.artista = new Artista();
    this.generos = [
      {label: 'Selecione', value: null},
      {label: 'MASCULINO', value: 'MASCULINO'},
      {label: 'FEMININO', value: 'FEMININO'},
    ];
    this.paizOrigems = [
      {label: 'Selecione', value: null},
    ];
    this.instrumentos = [];
    this.buscarPaizOrigem();
    this.buscarInstrumento();

    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        const id = params.id ? Number(params.id) : null;
        this.buscar(id);
      } else if (params.id_paizOrigem) {
        const idpaizOrigem = params.id_paizOrigem ? Number(params.id_paizOrigem) : null;
        this.buscarArtistaPorPaizOrigem(idpaizOrigem);
      } else {
        this.consultar();
      }
    });
  }

  buscarPaizOrigem() {
    this.paizOrigemService.consultar().subscribe(resposta => {
      const itens = resposta as Paiz[];
      itens.forEach(element => {
         this.paizOrigems.push({label: element.nome, value: element});
      });
    }, error => {
      console.log(error);
      alert(error.ok);
    }
    );
  }

  buscarInstrumento() {
    this.instrumentoService.consultar().subscribe(resposta => {
      const itens = resposta as Instrumento[];
      itens.forEach(element => {
         this.instrumentos.push({label: element.nome, value: element});
      });
      }, error => {
        console.log(error);
        alert(error.ok);
      }
    );
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
      this.artista.nascimento2 = 111178979798;
      this.artista.nascimento3 = new Date();
    }, error => {
      console.log(error);
      alert('erro artistas.' + error);
    });
  }

  consultar() {
    this.artistaService.consultar().subscribe(resposta => {
      this.artistas = resposta as Artista[];
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
    console.log('salvar', this.artista);
    console.log('salvar', this.artista.paizOrigem);
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

