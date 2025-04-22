import { Injectable } from '@angular/core';
import { BaseserviceService } from '../baseservice.service';
import {  TxnListRequest } from '../../RequestModel/ReportRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportmanService  {

  constructor(private apiconnector: BaseserviceService) { }

  GetAddressList(): Observable<any> {
    return this.apiconnector.GetAPI("orderaddresses");
  }
  GetCustomerList(): Observable<any> {
    return this.apiconnector.GetAPI("CustomerWebs");
  }
  GetcommItem(): Observable<any> {
    return this.apiconnector.GetAPI("CommItemWebs");
  }
  
  WebOrderMaster(PostData: TxnListRequest): Observable<any> {

    return this.apiconnector.PostAPI("WebOrders", PostData);
  }
 
}
