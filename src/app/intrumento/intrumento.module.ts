import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntrumentoRoutingModule } from './intrumento-routing.module';
import { IntrumentoAddComponent } from './intrumento-add/intrumento-add.component';
import { IntrumentoListComponent } from './intrumento-list/intrumento-list.component';


@NgModule({
  declarations: [IntrumentoAddComponent, IntrumentoListComponent],
  imports: [
    CommonModule,
    IntrumentoRoutingModule
  ]
})
export class IntrumentoModule { }
