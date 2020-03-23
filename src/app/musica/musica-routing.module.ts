import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicaAddComponent } from './musica-add/musica-add.component';
import { MusicaListComponent } from './musica-list/musica-list.component';


const routes: Routes = [
  { path: 'musica-add', component: MusicaAddComponent },
  { path: 'musica-add/:id', component: MusicaAddComponent },
  { path: 'musica-list', component: MusicaListComponent },
  { path: 'album/:id_album', component: MusicaListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicaRoutingModule { }
