import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {MenubarModule} from 'primeng/menubar';

import { AlbumService } from './album.service';
import { AlbumRoutingModule } from './album-routing.module';
import { AlbumAddComponent } from './album-add/album-add.component';
import { AlbumListComponent } from './album-list/album-list.component';

@NgModule({
  declarations: [AlbumAddComponent, AlbumListComponent],
  imports: [
    CommonModule, FormsModule,
    ToastModule, PanelModule, TableModule, ButtonModule, DropdownModule, MenubarModule,
    AlbumRoutingModule,
  ],
  providers: [AlbumService]
})
export class AlbumModule { }

