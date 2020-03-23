import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banda-add',
  templateUrl: './banda-add.component.html',
  styleUrls: ['./banda-add.component.css']
})
export class BandaAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('BandaAddComponent');
  }

}
