import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaizRoutingModule } from './paiz-routing.module';
import { PaizAddComponent } from './paiz-add/paiz-add.component';
import { PaizListComponent } from './paiz-list/paiz-list.component';


@NgModule({
  declarations: [PaizAddComponent, PaizListComponent],
  imports: [
    CommonModule,
    PaizRoutingModule
  ]
})
export class PaizModule { }
