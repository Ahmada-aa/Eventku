import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any={};
  hide:boolean=true;
  constructor(
    public api:ApiService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  loading:boolean | undefined;
  login()
  {
    this.loading=true;
    this.api.login(this.user.email, this.user.password).subscribe(res=>{
      console.log(res);
      this.loading=false;
      localStorage.setItem('appToken',JSON.stringify(res));
      this.router.navigate(['admin/dashboard']);
    },error=>{
      this.loading=false;
      alert('Tidak Dapat Login!');
    });
  }

}
