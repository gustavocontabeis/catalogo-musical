import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'catalogo-musical';
  items: MenuItem[];
  ngOnInit() {
    this.items = [
        {
            label: 'Cadastros',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Banda',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {label: 'Listagem', routerLink: 'banda/banda-list' , icon: 'pi pi-fw pi-list'},
                        {label: 'Cadastro', routerLink: 'banda/banda-add', icon: 'pi pi-fw pi-plus'},
                    ]
                },
                {
                    label: 'Album',
                    icon: 'pi pi-fw pi-compass',
                    items: [
                        {label: 'Listagem', routerLink: 'album/album-list', icon: 'pi pi-fw pi-list'},
                        {label: 'Cadastro', routerLink: 'album/album-add', icon: 'pi pi-fw pi-plus'},
                    ]
                },
                {
                    label: 'Paiz',
                    icon: 'pi pi-fw pi-home',
                    items: [
                        {label: 'Listagem', routerLink: 'paiz/paiz-list', icon: 'pi pi-fw pi-list'},
                        {label: 'Cadastro', routerLink: 'paiz/paiz-add', icon: 'pi pi-fw pi-plus'},
                    ]
                },
                {
                    label: 'Artista',
                    icon: 'pi pi-fw pi-star-o',
                    items: [
                        {label: 'Listagem', routerLink: 'artista/artista-list', icon: 'pi pi-fw pi-list'},
                        {label: 'Cadastro', routerLink: 'artista/artista-add', icon: 'pi pi-fw pi-plus'},
                    ]
                },
                {
                    label: 'Instrumento',
                    icon: 'pi pi-fw pi-ticket',
                    items: [
                        {label: 'Listagem', routerLink: 'instrumento/instrumento-list', icon: 'pi pi-fw pi-list'},
                        {label: 'Cadastro', routerLink: 'instrumento/instrumento-add', icon: 'pi pi-fw pi-plus'},
                    ]
                },
                {
                    label: 'Musica',
                    icon: 'pi pi-fw pi-play',
                    items: [
                        {label: 'Listagem', routerLink: 'musica/musica-list', icon: 'pi pi-fw pi-list'},
                        {label: 'Cadastro', routerLink: 'musica/musica-add', icon: 'pi pi-fw pi-plus'},
                    ]
                },
            ]
        },
    ];
}
}
