import { LoginService } from './login/login.service';
import { LoginComponent } from './login/login.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import { MusicaModule } from './musica/musica.module';
import { InstrumentoModule } from './instrumento/instrumento.module';
import { Instrumento } from './instrumento/instrumento';
import { ArtistaModule } from './artista/artista.module';
import { PaizModule } from './paiz/paiz.module';
import { AlbumModule } from './album/album.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'node_modules/primeng/panel';
import { CalendarModule } from 'primeng/calendar';

import { BandaModule } from './banda/banda.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PanelModule, MenubarModule, CalendarModule,
    BandaModule, AlbumModule, PaizModule, ArtistaModule, InstrumentoModule, MusicaModule
  ],
  providers: [MessageService, ConfirmationService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
