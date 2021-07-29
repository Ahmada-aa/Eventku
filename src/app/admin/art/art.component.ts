import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { ArtDetailComponent } from '../art-detail/art-detail.component';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
  title:any;
  art:any={};
  arts:any=[];
  constructor(
    public dialog:MatDialog,
    public api:ApiService
  ) { }

  ngOnInit(): void {
    this.title = 'Art';
    this.getarts();
  }

  getarts()
  {
    this.api.get('seni').subscribe(result=>{
      this.arts=result;
    })   
 
  }

  artDetail(data: any,idx: number)
 {
   let dialog=this.dialog.open(ArtDetailComponent, {
     width:'400px',
     data:data
   });
   dialog.afterClosed().subscribe(res=>{
     if(res)
     {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
       if(idx==-1)this.arts.push(res);      
        //jika tidak maka perbarui data  
       else this.arts[idx]=res; 
     }
   })
 }

 deleteProduct(idx: any)
 {
   var conf=confirm('Delete item?');
   if(conf)
   this.arts.splice(idx,1);
 }

 buyProduct(idx: any)
 {
   var conf=confirm('Sure Purchase item?');
   if(conf)
   this.arts();
 }
}
