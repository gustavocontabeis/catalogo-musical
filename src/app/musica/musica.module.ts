import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

import { MusicaService } from './musica.service';
import { MusicaRoutingModule } from './musica-routing.module';
import { MusicaAddComponent } from './musica-add/musica-add.component';
import { MusicaListComponent } from './musica-list/musica-list.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [MusicaAddComponent, MusicaListComponent],
  imports: [
    CommonModule, FormsModule,
    ToastModule, PanelModule, TableModule, ButtonModule, DropdownModule, MenubarModule,
    MusicaRoutingModule,
  ],
  providers: [MusicaService]
})
export class MusicaModule { }

