import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstrumentoAddComponent } from './instrumento-add/instrumento-add.component';
import { InstrumentoListComponent } from './instrumento-list/instrumento-list.component';


const routes: Routes = [
  { path: 'instrumento-add', component: InstrumentoAddComponent },
  { path: 'instrumento-add/:id', component: InstrumentoAddComponent },
  { path: 'instrumento-list', component: InstrumentoListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstrumentoRoutingModule { }
