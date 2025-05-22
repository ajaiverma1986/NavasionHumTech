export class AllTransactionListResponse {
    transactionId!: number;
    transactioncode!: string;
    partnerId!: number;
    partnerTxnId!: string;
    refNo!: string;
    relatedReference!: string;
    bankTxnDatetime!: string;
    amount?: number;
    txnFee?: number;
    refNo1!: string;
    refNo2!: string;
    refNo3!: string;
    refNo4!: string;
    refNo5!: string;
    refNo6!: string;
    refNo7!: string;
    refNo8!: string;
    refNo9!: string;
    refNo10!: string;
    failureReason!: string;
    status!: number;
    partnerName!: string;
}
export class ListStatementResponse {
    LedgerId!: number;
    LedgerDate?: Date;
    OrganisationName?: string;
    LedgerTypeName?: string;
    Naration?: string;
    DbCr?: string;
    Amount?: number;
    Limit?: number;
    ReferenceId?: string;
}
export class TransactionSummaryByUserResponse {
    ServiceName!: string;
    RepType!: string;
    TxnCount!: number;
    TotalAmount!: number;

}
export class GetDayBookResponse {
    ServiceName!: string;
    PartnerId!: number;
    OrganisationName!: string;
    TxnTotalcount!: number;
    TxntotalAmt!: number;
    TxnSuccescount!: number;
    TxnSuccesAmt!: number;
    TxnPendingcount!: number;
    TxnPendingAmt!: number;
    TxnFailurecount!: number;
    TxnFailureAmt!: number;
    Surcharge!: number;
    Commission!: number;

}
export class GetFirmDetailByFirmId {
    Usercode!: string;
    UserId!: number;
    OrganisationName!: string;
    ContactPersonName!: string;
    AvailableLimit?: number;
    ThresoldLimit?: number;
    MobileNo!: string;
    EmailId!: string;
    LogoUrl!: string;
    RemarkReason!: string;
    Status!: number;
    StatusName!: string;
    UserPermaAddress!: string;
    MaxPayinamount?: number;
    MaxNoofcountPayin?: number;
    SameAmountPayinAllowed!: number;
    SameAmountPayinAllowedText!: string;
    UserOfficeAddress!: string;
    MinTxn?: number;
    MaxTxn?: number;
    ChargeTypeOn!: number;
    ChargeDeductionType!: string;
    PlanId?: number;
    PlanName!: string;
    Pancard!: string;
    AadharCard!: string;
    MaskedPan!: string;
    MaskedAadhar!: string;
    GstNo!: string;
}
export class CustomerResponse
{
   "@odata.etag": string
  no!: string
  name!: string
  mobilePhoneNo!: string
  city!: string
  countryRegionCode!: string
  county!: string
  stateCode!: string
  gstRegistrationNo!: string
  gstRegistrationType!: string
  gstCustomerType!: string
}
export class AddressTypeMasterResponse {
   "@odata.etag": string
  partyCode!: string
  addressType!: string
  partyName!: string
  address!: string
  city!: string
  pincode!: string
  primaryContactName!: string
  primaryContactNo!: string
  email!: string
  gstin!: string
  district!: string
  taluka!: string
  country!: string
  vendorNo!: string
  }
  export class CommItemWebResponse {
    "@odata.etag": string
    no!: string
    baseUnitOfMeasure!: string
    description!: string
    gst!: number
    gstCredit!: string
    gstGroupCode!: string
    hsnSACCode!: string
    useForCoastal!: boolean
  }
  export class CitydataResponse {
  "@odata.etag": string
  code!: string
  city!: string
  countryRegionCode!: string
  county!: string
}
export class WebOrderRailsResponse {
  "@odata.etag": string
  documentType!: string
  OrderNo!: string
  BusinessSegment!: string
  WEBORDERNo!: number
  WebOrder!: boolean
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
  Freight_On!: string
  Weight_In_TON!: number
  Rate_till_deliv_port!: number
  Shipping_Line_No!: string
  Shipping_Line_Name!: string
}
export class WeborderRequestsingle {
  "@odata.context": string
  "@odata.etag": string
  documentType!: string
  OrderNo!: string
  BusinessSegment!: string
  WEBORDERNo!: number
  WebOrder!: boolean
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
  Freight_On!: string
  Weight_In_TON!: number
  Rate_till_deliv_port!: number
  Shipping_Line_No!: string
  Shipping_Line_Name!: string
}

