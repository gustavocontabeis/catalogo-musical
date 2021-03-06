import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { BandaService } from './banda.service';
import { BandaRoutingModule } from './banda-routing.module';
import { BandaAddComponent } from './banda-add/banda-add.component';
import { BandaListComponent } from './banda-list/banda-list.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [BandaAddComponent, BandaListComponent],
  imports: [
    CommonModule, FormsModule,
    ToastModule, PanelModule, TableModule, ButtonModule,
    ConfirmDialogModule,
    BandaRoutingModule,
    MenubarModule,
  ],
  providers: [BandaService, ConfirmationService]
})
export class BandaModule { }

