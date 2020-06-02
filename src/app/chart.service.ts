import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ChartService {

  url="https://hostel-management-application1.herokuapp.com"

  constructor(private http: HttpClient) { }
   

  call(){

    return this.http.get(this.url+'/api/charts/hostel',{observe: 'body',params: new HttpParams().append('token', localStorage.getItem('auth-token'))})
  
  }

}
