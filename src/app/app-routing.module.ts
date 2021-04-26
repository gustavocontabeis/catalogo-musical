import { NaoAutorizadoComponent } from './nao-autorizado/nao-autorizado.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nao-autorizado', component: NaoAutorizadoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'banda', loadChildren: './banda/banda.module#BandaModule'},
  { path: 'album', loadChildren: './album/album.module#AlbumModule'},
  { path: 'paiz', loadChildren: './paiz/paiz.module#PaizModule'},
  { path: 'artista', loadChildren: './artista/artista.module#ArtistaModule'},
  { path: 'instrumento', loadChildren: './instrumento/instrumento.module#InstrumentoModule'},
  { path: 'musica', loadChildren: './musica/musica.module#MusicaModule'},
  // { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
