import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'banda', loadChildren: './banda/banda.module#BandaModule'},
  { path: 'album', loadChildren: './album/album.module#AlbumModule'},
  { path: 'paiz', loadChildren: './paiz/paiz.module#PaizModule'},
  { path: 'artista', loadChildren: './artista/artista.module#ArtistaModule'},
  { path: 'intrumento', loadChildren: './intrumento/intrumento.module#IntrumentoModule'},
  { path: 'musica', loadChildren: './musica/musica.module#MusicaModule'},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
