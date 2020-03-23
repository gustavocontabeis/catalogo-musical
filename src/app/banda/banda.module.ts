import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandaRoutingModule } from './banda-routing.module';
import { BandaAddComponent } from './banda-add/banda-add.component';
import { BandaListComponent } from './banda-list/banda-list.component';


@NgModule({
  declarations: [BandaAddComponent, BandaListComponent],
  imports: [
    CommonModule,
    BandaRoutingModule
  ]
})
export class BandaModule { }
