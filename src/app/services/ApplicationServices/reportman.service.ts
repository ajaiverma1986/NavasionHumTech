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
    return this.apiconnector.GetAPI("BC240/ODataV4/Company('SSSPL%20LIVE')/AddressMaster");
  }
  GetCustomerList(): Observable<any> {
    return this.apiconnector.GetAPI("BC240/ODataV4/Company('SSSPL%20LIVE')/Customer");
  }
  GetcommItem(): Observable<any> {
    return this.apiconnector.GetAPI("BC240/ODataV4/Company('SSSPL%20LIVE')/CommItem");
  }
  GetPostCode(): Observable<any> {
    return this.apiconnector.GetAPI("BC240/ODataV4/Company('SSSPL%20LIVE')/PostCode");
  }
  WebOrderMaster(PostData: TxnListRequest): Observable<any> {

    return this.apiconnector.PostAPI("BC240/ODataV4/Company('SSSPL%20LIVE%202025')/WebOrder", PostData);
  }
}
