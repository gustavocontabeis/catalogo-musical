import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { IntrumentoService } from './intrumento.service';
import { IntrumentoRoutingModule } from './intrumento-routing.module';
import { IntrumentoAddComponent } from './intrumento-add/intrumento-add.component';
import { IntrumentoListComponent } from './intrumento-list/intrumento-list.component';

@NgModule({
  declarations: [IntrumentoAddComponent, IntrumentoListComponent],
  imports: [
    CommonModule, FormsModule,
    ToastModule, PanelModule, TableModule, ButtonModule,
    IntrumentoRoutingModule,
  ],
  providers: [IntrumentoService]
})
export class IntrumentoModule { }

