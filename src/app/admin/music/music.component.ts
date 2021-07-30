import { Component, OnInit } from '@angular/core';
import { MusicDetailComponent } from '../music-detail/music-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  title:any;
  msc:any={};
  mscs:any=[];
  constructor(
    public dialog:MatDialog,
    public api:ApiService
  ) { }

  ngOnInit(): void {
    this.title = 'Music';
    this.getmscs();
  }

  loading: boolean | undefined;
  getmscs()
  {
    this.loading=true;
    this.api.get('musiks').subscribe(result=>{
      this.mscs=result;
      this.loading=false;
    },error=>{
      this.loading=false;
      alert('Trouble, Try Again!');
    })   
 
  }

  musicDetail(data: any,idx: number)
 {
   let dialog=this.dialog.open(MusicDetailComponent, {
     width:'400px',
     data:data
   });
   dialog.afterClosed().subscribe(res=>{
     if(res)
     {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
       if(idx==-1)this.mscs.push(res);      
        //jika tidak maka perbarui data  
       else this.mscs[idx]=data; 
     }
   })
 }

 deleteProduct(id: any, idx: any)
 {
   
   var conf=confirm('Delete item?');
   if(conf)
   {
      this.api.delete('musiks/'+id).subscribe(res=>{
      this.mscs.splice(idx,1);
    });
   }
   
 }

 buyProduct(idx: any)
 {
   var conf=confirm('Sure Purchase item?');
   if(conf)
   this.mscs();
 }

}
