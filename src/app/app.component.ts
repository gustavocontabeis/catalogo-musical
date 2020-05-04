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
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Listagem', url: 'banda/banda-list' , icon: 'pi pi-fw pi-list'},
                        {label: 'Cadastro', url: 'banda/banda-add', icon: 'pi pi-fw pi-plus'},
                    ]
                },
                {
                    label: 'Album',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Listagem', url: 'album/album-list', icon: 'pi pi-fw pi-list'},
                        {label: 'Cadastro', url: 'album/album-add', icon: 'pi pi-fw pi-plus'},
                    ]
                },
                {
                    label: 'Paiz',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Listagem', url: 'paiz/paiz-list', icon: 'pi pi-fw pi-list'},
                        {label: 'Cadastro', url: 'paiz/paiz-add', icon: 'pi pi-fw pi-plus'},
                    ]
                },
                {
                    label: 'Artista',
                    icon: 'pi pi-fw pi-star-o',
                    items: [
                        {label: 'Listagem', url: 'artista/artista-list', icon: 'pi pi-fw pi-list'},
                        {label: 'Cadastro', url: 'artista/artista-add', icon: 'pi pi-fw pi-plus'},
                    ]
                },
                {
                    label: 'Instrumento',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Listagem', url: 'instrumento/instrumento-list', icon: 'pi pi-fw pi-list'},
                        {label: 'Cadastro', url: 'instrumento/instrumento-add', icon: 'pi pi-fw pi-plus'},
                    ]
                },
                {
                    label: 'Musica',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Listagem', url: 'musica/musica-list', icon: 'pi pi-fw pi-list'},
                        {label: 'Cadastro', url: 'musica/musica-add', icon: 'pi pi-fw pi-plus'},
                    ]
                },
            ]
        },
    ];
}
}
