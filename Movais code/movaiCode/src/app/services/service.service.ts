import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { msg } from '../model/Message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class myservice {
 baseurl ="https://isitcom.alwaysdata.net"
  constructor(private http:HttpClient) { }

  
  getavis(){
    return this.http.get<any>(`${this.baseurl}/read`)
  }
  changestate(): Observable<any> {
    return this.http.get(`${this.baseurl}/Changementclimatique`);
  }
 
sendform(body:any){
  return this.http.post(`${this.baseurl}/create`,body)
}

}