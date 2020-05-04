import { Router, ActivatedRoute } from '@angular/router';
import { InstrumentoService } from '../instrumento.service';
import { Component, OnInit } from '@angular/core';
import { Instrumento } from '../instrumento';
import { MessageService, ConfirmationService, SelectItem } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@Component({
  selector: 'app-instrumento-list',
  templateUrl: './instrumento-list.component.html',
  styleUrls: ['./instrumento-list.component.css']
})
export class InstrumentoListComponent implements OnInit {

  instrumento: Instrumento = new Instrumento();
  instrumentos: Instrumento[];
  exibirDialog: boolean;
  novoRegistro: boolean;

//[declaracoes]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private instrumentoService: InstrumentoService) { }

  ngOnInit() {
    this.exibirDialog = false;
    this.novoRegistro = false;
    this.instrumento = new Instrumento();
//[ngOnInit]
//[buscarFK]
    this.activatedRoute.params.subscribe(params => {
      const id = params.id ? Number(params.id) : null;
      console.log(id);
      if (id != null) {
      console.log('contem id: ' + id);
        this.buscar(id);
      }else{
        this.consultar();
      }
    });

  }


  buscar(id: number) {
    this.instrumentoService.buscar(id).subscribe(resposta => {
      this.instrumento = resposta as Instrumento;
    }, error => {
      console.log(error);
      alert('erro instrumentos.' + error);
    });
  }

  consultar() {
    this.instrumentoService.consultar().subscribe(resposta => {
      this.instrumentos = resposta as Instrumento[];
    }, error => {
      console.log(error);
      alert('erro instrumentos.' + error);
    });
  }

  novo() {
    const instrumento = new Instrumento();
    this.exibirModal(instrumento);
  }

  exibirModal(instrumento: Instrumento) {
    this.novoRegistro = true;
    this.exibirDialog = true;
    this.instrumento = instrumento;
  }

  salvar() {
    console.log('salvar');
    this.instrumentoService.adicionar(this.instrumento).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({severity: 'success', summary: 'OK', detail: 'Registro adicionado com sucesso.'});
      this.router.navigate(['/instrumento/instrumento-list']);
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
    this.instrumentoService.excluir(this.instrumento).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({severity: 'success', summary: 'OK', detail: 'Registro excluído com sucesso.'});
      }, error => alert('erro instrumentos.')
    );
  }

  aoSelecionar(event) {
    this.novoRegistro = false;
  }

  onSubmit(instrumentoForm) {

  }

}

