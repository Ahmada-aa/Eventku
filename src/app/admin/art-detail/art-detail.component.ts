import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.css']
})
export class ArtDetailComponent implements OnInit {

  constructor(
    public dialogRef : MatDialogRef<ArtDetailComponent>,
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
      this.api.post('senis',this.data).subscribe(result=>{
      this.dialogRef.close(result);
      this.loading = false;
    },error=>{
      this.loading=false;
      alert('Cannot Save Data!');
    });
  }else{
    this.api.put('seniss/'+this.data.id,this.data).subscribe(result=>{
      this.dialogRef.close(result);
      this.loading = false;
    },error=>{
      this.loading=false;
      alert('Cannot Update Data!');
    });
  }
}

}