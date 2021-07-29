import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  title:any;
  msc:any={};
  idx: any;
  constructor() { }

  ngOnInit(): void {
    this.title = 'Music';
    this.msc={
      code : '001',
      event_name : 'Music Festival',
      organizer : 'Maru',
      location : 'Kedai Maru',
      date : 'August 19',
      price : 99990
    };
  }

}
