import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistaAddComponent } from './artista-add/artista-add.component';
import { ArtistaListComponent } from './artista-list/artista-list.component';


const routes: Routes = [
  { path: 'artista-add', component: ArtistaAddComponent },
  { path: 'artista-add/:id', component: ArtistaAddComponent },
  { path: 'artista-list', component: ArtistaListComponent },
  { path: 'paizOrigem/:id_paizOrigem', component: ArtistaListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistaRoutingModule { }
