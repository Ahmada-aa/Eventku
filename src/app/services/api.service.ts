import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverUrl:any='http://localhost/evtphp/getmusik.php/';
  constructor(
    public http:HttpClient
  ) { }

  get(url: string)
  {
    return this.http.get(this.serverUrl+url);
  }
  post(url: string, data: undefined)
  {
    return this.http.post(this.serverUrl+url,data);
  }
}
