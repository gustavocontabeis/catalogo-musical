import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { PaizService } from './paiz.service';
import { PaizRoutingModule } from './paiz-routing.module';
import { PaizAddComponent } from './paiz-add/paiz-add.component';
import { PaizListComponent } from './paiz-list/paiz-list.component';

@NgModule({
  declarations: [PaizAddComponent, PaizListComponent],
  imports: [
    CommonModule, FormsModule,
    ToastModule, PanelModule, TableModule, ButtonModule,
    PaizRoutingModule,
  ],
  providers: [PaizService]
})
export class PaizModule { }

