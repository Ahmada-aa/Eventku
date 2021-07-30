import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //serverUrl:any='http://localhost/evtphp/getmusik.php/';
  serverUrl:any='http://localhost:1337/';
  constructor(
    public http:HttpClient
  ) { }

  httpOptions:any;
  getToken(){
    var tokenKey=localStorage.getItem('appToken');
    if(tokenKey!=null){
      var tkn=JSON.parse(tokenKey);
      this.httpOptions={
        headers:new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+tkn.jwt
        })
      }
    }
  }

  get(url: string)
  {
    return this.http.get(this.serverUrl+url,this.httpOptions);
  }

  post(url: string, data: object)
  {
    return this.http.post(this.serverUrl+url,data,this.httpOptions);
  }

  put(url: string, data: object)
  {
    return this.http.put(this.serverUrl+url,data,this.httpOptions);
  }

  delete(url: string)
  {
    return this.http.delete(this.serverUrl+url,this.httpOptions);
  }
  
  register(email: any,password: any)
  {
    return this.http.post(this.serverUrl+'auth/local',{identifier:email,password:password});
  }

  login(email: any, password: any)
{
  return this.http.post(this.serverUrl+'auth/local',{identifier:email, password:password});
}
}
