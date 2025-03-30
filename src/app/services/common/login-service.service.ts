import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  apiurl = environment.baseurl;
  //authInfo = Buffer.from(`${environment.ApiUsername}:${environment.ApiPassword}`).toString('base64');
  authInfo=btoa(environment.ApiUsername+":"+environment.ApiPassword);
  constructor(private http: HttpClient) {

  }
  getDefaultHeader(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set("Access-Control-Allow-Origin", "*");
    headers = headers.set("content-type", "application/json");
    headers = headers.set("Authorization", "Basic " + this.authInfo);
    return headers;
  }
  login(): Observable<any> {
    let headers: HttpHeaders = this.getDefaultHeader();
    return this.http.get<any>(this.apiurl+"BC240/ODataV4/Company('SSSPL%20LIVE')/WebUserList", { headers: headers });
  }

}
