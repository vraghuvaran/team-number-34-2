import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CollegewiseService {

  url="https://hostel-management-application1.herokuapp.com"
  constructor(private http: HttpClient) { }
  
  getcolleges(blockName: any){
  return this.http.get(this.url+'/api/charts/college/name/'+blockName,{observe: 'body',params: new HttpParams().append('token', localStorage.getItem('auth-token'))})
  }

  getstudents(blockName: any, college: any){
     return this.http.get(this.url+'/api/charts/college/name/detail/'+blockName+'/'+college,{observe: 'body',params: new HttpParams().append('token', localStorage.getItem('auth-token'))})
  }


}
