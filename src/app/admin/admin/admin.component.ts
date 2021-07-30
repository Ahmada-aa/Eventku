import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    public api:ApiService,
    public router:Router
  ) { }

  ngOnInit(): void {
    //this.ceklogin();
  }

  ceklogin()
  {
    this.api.get('musiks').subscribe(res=>{
      //is logged in
      return;
    }, err=>{
      //not logged in
      this.router.navigate(['/login']);
    })
  }

  logout(){
    let conf=confirm('Are You Sure To Exit?');
    if (conf){
      localStorage.removeItem('appToken');
      window.location.reload();
    }
  }

}
