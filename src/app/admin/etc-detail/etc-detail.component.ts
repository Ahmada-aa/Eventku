import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-etc-detail',
  templateUrl: './etc-detail.component.html',
  styleUrls: ['./etc-detail.component.css']
})
export class EtcDetailComponent implements OnInit {
  constructor(
    public dialogRef : MatDialogRef<EtcDetailComponent>,
    @Inject (MAT_DIALOG_DATA) public data : any
  ) { }

  ngOnInit(): void {
  }
  saveData()
  {
    this.dialogRef.close(this.data);
  }

}
