import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicaRoutingModule } from './musica-routing.module';
import { MusicaAddComponent } from './musica-add/musica-add.component';
import { MusicaListComponent } from './musica-list/musica-list.component';


@NgModule({
  declarations: [MusicaAddComponent, MusicaListComponent],
  imports: [
    CommonModule,
    MusicaRoutingModule
  ]
})
export class MusicaModule { }
