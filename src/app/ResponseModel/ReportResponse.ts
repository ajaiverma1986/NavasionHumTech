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
  
