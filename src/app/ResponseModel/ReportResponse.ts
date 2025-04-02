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
  No!: string
  Name!: string
  Address!: string
  Post_Code!: string
  GST_Registration_No!: string
  P_A_N_No!: string
  Salesperson_Code!: string
  TAN_No!: string
  Name_2!: string
  Responsibility_Center!: string
  Location_Code!: string
  Country_Region_Code!: string
  Phone_No!: string
  IC_Partner_Code!: string
  Contact!: string
  Customer_Posting_Group!: string
  Allow_Multiple_Posting_Groups!: boolean
  Gen_Bus_Posting_Group!: string
  VAT_Bus_Posting_Group!: string
  Customer_Price_Group!: string
  Customer_Disc_Group!: string
  Payment_Terms_Code!: string
  Reminder_Terms_Code!: string
  Fin_Charge_Terms_Code!: string
  Currency_Code!: string
  Language_Code!: string
  Search_Name!: string
  Credit_Limit_LCY!: number
  Blocked!: string
  Privacy_Blocked!: boolean
  Last_Date_Modified!: string
  Application_Method!: string
  Combine_Shipments!: boolean
  Reserve!: string
  Ship_to_Code!: string
  Shipping_Advice!: string
  Shipping_Agent_Code!: string
  Base_Calendar_Code!: string
  Balance_LCY!: number
  Balance_Due_LCY!: number
  Sales_LCY!: number
  Payments_LCY!: number
  Coupled_to_CRM!: boolean
  Coupled_to_Dataverse!: boolean
  Global_Dimension_1_Filter!: string
  Global_Dimension_2_Filter!: string
  Currency_Filter!: string
  Date_Filter!: string
}

