import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandaAddComponent } from './banda-add/banda-add.component';
import { BandaListComponent } from './banda-list/banda-list.component';


const routes: Routes = [
  { path: 'banda-add', component: BandaAddComponent },
  { path: 'banda-add/:id', component: BandaAddComponent },
  { path: 'banda-list', component: BandaListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandaRoutingModule { }
