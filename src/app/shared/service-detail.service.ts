import { Injectable } from '@angular/core';
import { ServiceDetail } from './service-detail.model';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceDetailService {

  constructor(private http:HttpClient) { }
  formData:ServiceDetail=new ServiceDetail();
  readonly APIURL='http://localhost:60516/api/HomeService';

  getAppList():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'/appliance');
  }

  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'/HomeService');
  }

  addEmployee(){
    return this.http.post(this.APIURL,this.formData);
  }
 

  // postServiceDetail(){
  //   return this.http.post(this.baseURL,this.formData);
  //}
}
