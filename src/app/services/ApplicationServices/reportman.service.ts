import { Injectable } from '@angular/core';
import { BaseserviceService } from '../baseservice.service';
import {   WebOrderRequest } from '../../RequestModel/ReportRequest';
import { Observable } from 'rxjs';
import { WeborderRequestsingle } from '../../ResponseModel/ReportResponse';

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
  
  WebOrderMaster(PostData: WebOrderRequest): Observable<WeborderRequestsingle> {
    return this.apiconnector.PostAPI("WebOrderRails", PostData);
  }
   WebOrderMasterdetail(): Observable<any> {
    return this.apiconnector.GetAPI("WebOrderRails");
  }
 GetAllCity(): Observable<any> {
    return this.apiconnector.GetAPI("Citys");
  }
}
