import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  url="https://hostel-management-application1.herokuapp.com"

  constructor(private http: HttpClient) { }

  getstudents(blockName: any){
    return this.http.get(this.url+'/api/charts/all/student/'+blockName,{observe: 'body',params: new HttpParams().append('token', localStorage.getItem('auth-token'))})
  }
}
