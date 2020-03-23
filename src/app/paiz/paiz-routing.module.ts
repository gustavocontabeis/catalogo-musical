import { PaizListComponent } from './paiz-list/paiz-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaizAddComponent } from './paiz-add/paiz-add.component';


const routes: Routes = [
  { path: 'paiz-add', component: PaizAddComponent },
  { path: 'paiz-add/:id', component: PaizAddComponent },
  { path: 'paiz-list', component: PaizListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaizRoutingModule { }
