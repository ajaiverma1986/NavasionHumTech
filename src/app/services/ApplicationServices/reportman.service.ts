import { Injectable } from '@angular/core';
import { BaseserviceService } from '../baseservice.service';
import {  TxnListRequest } from '../../RequestModel/ReportRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportmanService  {

  constructor(private apiconnector: BaseserviceService) { }

  GetAddressTypeMaster(): Observable<any> {
    return this.apiconnector.GetAPI("AddressMaster");
  }
  GetCustomerList(): Observable<any> {
    return this.apiconnector.GetAPI("Customer");
  }
  GetcommItem(): Observable<any> {
    return this.apiconnector.GetAPI("CommItem");
  }
  GetPostCode(): Observable<any> {
    return this.apiconnector.GetAPI("PostCode");
  }
  WebOrderMaster(PostData: TxnListRequest): Observable<any> {

    return this.apiconnector.PostAPI("WebOrder", PostData);
  }
}
