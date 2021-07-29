import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { EtcDetailComponent } from '../etc-detail/etc-detail.component';

@Component({
  selector: 'app-etc',
  templateUrl: './etc.component.html',
  styleUrls: ['./etc.component.css']
})
export class EtcComponent implements OnInit {
  title:any;
  fnb:any={};
  fnbs:any=[];
  constructor(
    public dialog:MatDialog,
    public api:ApiService
  ) { }

  ngOnInit(): void {
    this.title = 'F & B';
    this.getfnbs();
  }

  getfnbs()
  {
    this.api.get('musik').subscribe(result=>{
      this.fnbs=result;
    })   
 
  }

  fnbDetail(data: any,idx: number)
 {
   let dialog=this.dialog.open(EtcDetailComponent, {
     width:'400px',
     data:data
   });
   dialog.afterClosed().subscribe(res=>{
     if(res)
     {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
       if(idx==-1)this.fnbs.push(res);      
        //jika tidak maka perbarui data  
       else this.fnbs[idx]=res; 
     }
   })
 }

 deleteProduct(idx: any)
 {
   var conf=confirm('Delete item?');
   if(conf)
   this.fnbs.splice(idx,1);
 }

 buyProduct(idx: any)
 {
   var conf=confirm('Sure Purchase item?');
   if(conf)
   this.fnbs();
 }

}
