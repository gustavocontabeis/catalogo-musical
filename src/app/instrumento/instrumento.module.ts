import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { InstrumentoService } from './instrumento.service';
import { InstrumentoRoutingModule } from './instrumento-routing.module';
import { InstrumentoAddComponent } from './instrumento-add/instrumento-add.component';
import { InstrumentoListComponent } from './instrumento-list/instrumento-list.component';

@NgModule({
  declarations: [InstrumentoAddComponent, InstrumentoListComponent],
  imports: [
    CommonModule, FormsModule,
    ToastModule, PanelModule, TableModule, ButtonModule,
    InstrumentoRoutingModule,
  ],
  providers: [InstrumentoService]
})
export class InstrumentoModule { }

