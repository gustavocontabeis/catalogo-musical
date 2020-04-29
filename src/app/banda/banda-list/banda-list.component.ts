import { AlbumService } from './../../album/album.service';

import { Router, ActivatedRoute } from '@angular/router';
import { BandaService } from '../banda.service';
import { Component, OnInit } from '@angular/core';
import { Banda } from '../banda';
import { MessageService, ConfirmationService, SelectItem } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Album } from 'src/app/album/album';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  banda: Banda = new Banda();
  bandas: Banda[];
  exibirDialog: boolean;
  novoRegistro: boolean;

  albuns: SelectItem[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private bandaService: BandaService,
    private albunsService: AlbumService) { }

  ngOnInit() {
    this.exibirDialog = false;
    this.novoRegistro = false;
    this.consultar();
    this.banda = new Banda();
    this.albuns = [];

    this.buscarAlbuns();
    this.activatedRoute.params.subscribe(params => {
      const id = params.id ? Number(params.id) : null;
      console.log(id);
      if (id != null) {
        console.log('contem id' + id);
        this.buscar(id);
      }
    });

  }

  buscarAlbuns() {
    this.albunsService.consultar().subscribe(resposta => {
      const itens = resposta as Album[];
      itens.forEach(element => {
        this.albuns.push({ label: element.nome, value: element });
      });
    }, error => {
      console.log(error);
      alert(error.ok);
    }
    );
  }

  buscar(id: number) {
    this.bandaService.buscar(id).subscribe(resposta => {
      this.banda = resposta as Banda;
    }, error => {
      console.log(error);
      alert('erro bandas.' + error);
    });
  }

  consultar() {
    this.bandaService.consultar().subscribe(resposta => {
      this.bandas = resposta as Banda[];
    }, error => {
      console.log(error);
      alert('erro bandas.' + error);
    });
  }

  novo() {
    const banda = new Banda();
    this.exibirModal(banda);
  }

  exibirModal(banda: Banda) {
    this.novoRegistro = true;
    this.exibirDialog = true;
    this.banda = banda;
  }

  salvar() {
    console.log('salvar');
    this.bandaService.adicionar(this.banda).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({ severity: 'success', summary: 'OK', detail: 'Registro adicionado com sucesso.' });
      this.router.navigate(['/banda/banda-list']);
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
    this.bandaService.excluir(this.banda).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({ severity: 'success', summary: 'OK', detail: 'Registro excluído com sucesso.' });
    }, error => alert('erro bandas.')
    );
  }

  aoSelecionar(event) {
    this.novoRegistro = false;
  }

  onSubmit(bandaForm) {

  }

}

