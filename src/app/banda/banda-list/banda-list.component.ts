import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('BandaListComponent');

  }

}
