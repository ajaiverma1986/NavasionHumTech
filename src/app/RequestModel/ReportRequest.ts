import { ListRequest } from "../RequestModel/BaseRequest";

export class TxnListRequest extends ListRequest {
    TransactionCode!: string;
    TxnType!: string;
    PartnerTransactionId!: string;
    Status!: number;
    FromDate?: string;
    ToDate?: string;
}
export class UserStatementRequest extends ListRequest {
    FromDate?: string;
    ToDate?: string;
}
export class GetDayBookRequest {
    UserID!:number;
    FromDate?: string;
    ToDate?: string;
}
export class WebOrderRequest {
  documentType!: string
  WebOrder!: boolean
  OrderNo!: string
  BusinessSegment!: string
  orderDate!: string
  RailorderType!: string
  Sell_Customer_No!: string
  Sell_to_Customer_Name!: string
  Delivery_To!: string
  PartyName!: string
  LoadingCity!: string
  FinalDestination!: string
  loadingPoint!: number
  TerminalofLoading!: string
  TerminalofDestination!: string
  CommodityName!: string
  Weight_In_TON!: number
  Rate_till_deliv_port!: number
  Shipping_Line_No!: string
  Shipping_Line_Name!: string
  WEBORDERNo!:number;
}