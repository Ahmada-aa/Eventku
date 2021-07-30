import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.css']
})
export class MusicDetailComponent implements OnInit {

  constructor(
    public dialogRef : MatDialogRef<MusicDetailComponent>,
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
      this.api.post('musiks',this.data).subscribe(result=>{
      this.dialogRef.close(result);
      this.loading = false;
    },error=>{
      this.loading=false;
      alert('Cannot Save Data!');
    });
  }else{
    this.api.put('musiks/'+this.data.id,this.data).subscribe(result=>{
      this.dialogRef.close(result);
      this.loading = false;
    },error=>{
      this.loading=false;
      alert('Cannot Update Data!');
    });
  }
}

}
