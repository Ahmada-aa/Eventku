import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sport-detail',
  templateUrl: './sport-detail.component.html',
  styleUrls: ['./sport-detail.component.css']
})
export class SportDetailComponent implements OnInit {
  constructor(
    public dialogRef : MatDialogRef<SportDetailComponent>,
    @Inject (MAT_DIALOG_DATA) public data : any
  ) { }

  ngOnInit(): void {
  }
  saveData()
  {
    this.dialogRef.close(this.data);
  }

}
