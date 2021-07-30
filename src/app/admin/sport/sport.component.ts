import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { SportDetailComponent } from '../sport-detail/sport-detail.component';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {
  title:any;
  spr:any={};
  sprs:any=[];
  constructor(
    public dialog:MatDialog,
    public api:ApiService
  ) { }

  ngOnInit(): void {
    this.title = 'Sport';
    this.getsprs();
  }

  loading: boolean | undefined;
  getsprs()
  {
    this.loading=true;
    this.api.get('sports').subscribe(result=>{
      this.sprs=result;
      this.loading=false;
    },error=>{
      this.loading=false;
      alert('Trouble, Try Again!');
    })   
 
  }

  sportDetail(data: any,idx: number)
 {
   let dialog=this.dialog.open(SportDetailComponent, {
     width:'400px',
     data:data
   });
   dialog.afterClosed().subscribe(res=>{
     if(res)
     {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
       if(idx==-1)this.sprs.push(res);      
        //jika tidak maka perbarui data  
       else this.sprs[idx]=data; 
     }
   })
 }

 deleteProduct(id: any, idx: any)
 {
   
   var conf=confirm('Delete item?');
   if(conf)
   {
      this.api.delete('musiks/'+id).subscribe(res=>{
      this.sprs.splice(idx,1);
    });
   }
   
 }

 buyProduct(idx: any)
 {
   var conf=confirm('Sure Purchase item?');
   if(conf)
   this.sprs();
 }

}