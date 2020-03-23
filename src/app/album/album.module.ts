import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumAddComponent } from './album-add/album-add.component';
import { AlbumListComponent } from './album-list/album-list.component';


@NgModule({
  declarations: [AlbumAddComponent, AlbumListComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule
  ]
})
export class AlbumModule { }
