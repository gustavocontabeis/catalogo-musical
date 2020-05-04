import { Router, ActivatedRoute } from '@angular/router';
import { PaizService } from '../paiz.service';
import { Component, OnInit } from '@angular/core';
import { Paiz } from '../paiz';
import { MessageService, ConfirmationService, SelectItem } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@Component({
  selector: 'app-paiz-add',
  templateUrl: './paiz-add.component.html',
  styleUrls: ['./paiz-add.component.css']
})
export class PaizAddComponent implements OnInit {

  paiz: Paiz = new Paiz();
  paizs: Paiz[];
  exibirDialog: boolean;
  novoRegistro: boolean;
  continentes: SelectItem[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private paizService: PaizService) { }

  ngOnInit() {
    this.exibirDialog = false;
    this.novoRegistro = false;
    this.paiz = new Paiz();
    this.continentes = [{label: 'Selecione', value: null},
      {label: 'AMERICA_NORTE', value: 'AMERICA_NORTE'},
      {label: 'AMERICA_SUL', value: 'AMERICA_SUL'},
      {label: 'EUROPA', value: 'EUROPA'},
      {label: 'AZIA', value: 'AZIA'},
      {label: 'OCEANIA', value: 'OCEANIA'},
      {label: 'AFRICA', value: 'AFRICA'},
      {label: 'ANTARTIDA', value: 'ANTARTIDA'},
];

    this.activatedRoute.params.subscribe(params => {
      const id = params.id ? Number(params.id) : null;
      console.log(id);
      if (id != null) {
      console.log('contem id: ' + id);
        this.buscar(id);
      }
    });

  }
  

  buscar(id: number) {
    this.paizService.buscar(id).subscribe(resposta => {
      this.paiz = resposta as Paiz;
    }, error => {
      console.log(error);
      alert('erro paizs.' + error);
    });
  }

  consultar() {
    this.paizService.consultar().subscribe(resposta => {
      this.paizs = resposta as Paiz[];
    }, error => {
      console.log(error);
      alert('erro paizs.' + error);
    });
  }

  novo() {
    const paiz = new Paiz();
    this.exibirModal(paiz);
  }

  exibirModal(paiz: Paiz) {
    this.novoRegistro = true;
    this.exibirDialog = true;
    this.paiz = paiz;
  }

  salvar() {
    console.log('salvar', this.paiz);
    this.paizService.adicionar(this.paiz).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({severity: 'success', summary: 'OK', detail: 'Registro adicionado com sucesso.'});
      this.router.navigate(['/paiz/paiz-list']);
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
    this.paizService.excluir(this.paiz).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({severity: 'success', summary: 'OK', detail: 'Registro excluído com sucesso.'});
      }, error => alert('erro paizs.')
    );
  }

  aoSelecionar(event) {
    this.novoRegistro = false;
  }
  
  onSubmit(paizForm) {

  }

}

