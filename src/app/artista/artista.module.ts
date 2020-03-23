import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistaRoutingModule } from './artista-routing.module';
import { ArtistaAddComponent } from './artista-add/artista-add.component';
import { ArtistaListComponent } from './artista-list/artista-list.component';


@NgModule({
  declarations: [ArtistaAddComponent, ArtistaListComponent],
  imports: [
    CommonModule,
    ArtistaRoutingModule
  ]
})
export class ArtistaModule { }
