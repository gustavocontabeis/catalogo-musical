import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumAddComponent } from './album-add/album-add.component';
import { AlbumListComponent } from './album-list/album-list.component';


const routes: Routes = [
  { path: 'album-add', component: AlbumAddComponent },
  { path: 'album-add/:id', component: AlbumAddComponent },
  { path: 'album-list', component: AlbumListComponent },
  { path: 'banda/:id_banda', component: AlbumListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
