import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from 'node:inspector';



@Injectable({
  providedIn: 'root'
})
export class BaseserviceService {

  apiurl = environment.baseurl;
  companyName = environment.companyName;
  // authInfo = Buffer.from(`${environment.ApiUsername}:${environment.ApiPassword}`).toString('base64');
  authInfo=btoa(environment.ApiUsername+":"+environment.ApiPassword);
  constructor(private http: HttpClient) { }
  getDefaultHeader(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set("Access-Control-Allow-Origin", "*");
    headers = headers.set("content-type", "application/json");
    headers = headers.set("Authorization", "Basic " + this.authInfo);
    return headers;
  }

  GetAPI(Urln: string): Observable<any> {
    let headers: HttpHeaders = this.getDefaultHeader();
    return this.http.get<any>(this.apiurl+Urln+this.companyName , { headers: headers });
  }
  PostAPI(Urln: string, PostData: any): Observable<any> {
    let headers: HttpHeaders = this.getDefaultHeader();
    return this.http.post<any>(this.apiurl+Urln+this.companyName , PostData, { headers: headers })
  }

}
