import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  title:any;
  msc:any={};
  mscs:any=[];
  constructor() { }

  ngOnInit(): void {
    this.title = 'Music';
    this.getmscs();
  }

  getmscs()
  {
    this.mscs=[
      {
        code : '001',
        event_name : 'Music Festival',
        organizer : 'Maru',
        location : 'Kedai Maru',
        date : 'August 19',
        price : 99990
      },
      {
        code : '002',
        event_name : 'Musix Date',
        organizer : 'Dater',
        location : 'Date Maru',
        date : 'July 22',
        price : 12345
      }
    ];
  }

}
