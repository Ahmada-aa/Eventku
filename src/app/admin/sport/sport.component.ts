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
  spt:any={};
  spts:any=[];
  constructor(
    public dialog:MatDialog,
    public api:ApiService
  ) { }

  ngOnInit(): void {
    this.title = 'Sport';
    this.getspts();
  }

  getspts()
  {
    this.api.get('musik').subscribe(result=>{
      this.spts=result;
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
       if(idx==-1)this.spts.push(res);      
        //jika tidak maka perbarui data  
       else this.spts[idx]=res; 
     }
   })
 }

 deleteProduct(idx: any)
 {
   var conf=confirm('Delete item?');
   if(conf)
   this.spts.splice(idx,1);
 }

 buyProduct(idx: any)
 {
   var conf=confirm('Sure Purchase item?');
   if(conf)
   this.spts();
 }

}
