import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BlockinfoService {

  url="https://hostel-management-application1.herokuapp.com"
  constructor(private http: HttpClient) { }
   
  // sendblock(block_name: any){
  //  return this.http.get(this.url+'',{observe: 'body',params: new HttpParams().append('token', localStorage.getItem('auth-token'))})
  // }
  
  floorwiseinfo(blockName: any){
    return this.http.get(this.url+'/api/room/choose/'+blockName,{observe: 'body',params: new HttpParams().append('token', localStorage.getItem('auth-token'))})
  }

  roomwiseinfo(blockName: any,floor: any){
      return this.http.get(this.url+'/api/room/choose/floor/'+blockName+'/'+floor,{observe: 'body',params: new HttpParams().append('token', localStorage.getItem('auth-token'))})
  }


  floorstudentdetails(blockName: any, floor: any){
    return this.http.get(this.url+'/api/room/deail/floor/'+blockName+'/'+floor,{observe: 'body',params: new HttpParams().append('token', localStorage.getItem('auth-token'))})
  }

  rooms_studentdetails(blockName: any, floor: any, room :any){
    return this.http.get(this.url+'/api/room/deail/floor/room/'+blockName+'/'+floor+'/'+room,{observe: 'body',params: new HttpParams().append('token', localStorage.getItem('auth-token'))})
  }


  blockchart(block_name: any){
    return this.http.get(this.url+'/api/charts/block/chart/'+block_name,{observe: 'body',params: new HttpParams().append('token', localStorage.getItem('auth-token'))})
  }

  



}
