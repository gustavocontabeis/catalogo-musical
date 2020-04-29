import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { ArtistaService } from './artista.service';
import { ArtistaRoutingModule } from './artista-routing.module';
import { ArtistaAddComponent } from './artista-add/artista-add.component';
import { ArtistaListComponent } from './artista-list/artista-list.component';

@NgModule({
  declarations: [ArtistaAddComponent, ArtistaListComponent],
  imports: [
    CommonModule, FormsModule,
    ToastModule, PanelModule, TableModule, ButtonModule,
    ArtistaRoutingModule,
  ],
  providers: [ArtistaService]
})
export class ArtistaModule { }

