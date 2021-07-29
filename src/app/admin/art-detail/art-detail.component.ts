import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.css']
})
export class ArtDetailComponent implements OnInit {

  constructor(
    public dialogRef : MatDialogRef<ArtDetailComponent>,
    @Inject (MAT_DIALOG_DATA) public data : any
  ) { }

  ngOnInit(): void {
  }
  saveData()
  {
    this.dialogRef.close(this.data);
  }

}
