import { MessageService, ConfirmationService } from 'primeng/api';
import { MusicaModule } from './musica/musica.module';
import { IntrumentoModule } from './intrumento/intrumento.module';
import { Intrumento } from './intrumento/intrumento';
import { ArtistaModule } from './artista/artista.module';
import { PaizModule } from './paiz/paiz.module';
import { AlbumModule } from './album/album.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'node_modules/primeng/panel';
import { BandaModule } from './banda/banda.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PanelModule,
    BandaModule, AlbumModule, PaizModule, ArtistaModule, IntrumentoModule, MusicaModule
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
