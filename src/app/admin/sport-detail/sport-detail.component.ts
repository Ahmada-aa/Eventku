import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sport-detail',
  templateUrl: './sport-detail.component.html',
  styleUrls: ['./sport-detail.component.css']
})
export class SportDetailComponent implements OnInit {
  constructor(
    public dialogRef : MatDialogRef<SportDetailComponent>,
    @Inject (MAT_DIALOG_DATA) public data : any,
    public api:ApiService
  ) { }

  ngOnInit(): void {
  }

  loading:boolean | undefined;
  saveData()
  {
    this.loading = true;
    if(this.data.id == undefined)
    {
      this.api.post('sports',this.data).subscribe(result=>{
      this.dialogRef.close(result);
      this.loading = false;
    },error=>{
      this.loading=false;
      alert('Cannot Save Data!');
    });
  }else{
    this.api.put('sports/'+this.data.id,this.data).subscribe(result=>{
      this.dialogRef.close(result);
      this.loading = false;
    },error=>{
      this.loading=false;
      alert('Cannot Update Data!');
    });
  }
}

}