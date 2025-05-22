import { Component, OnInit, signal } from '@angular/core';
import { BasecomponentComponent } from '../basecomponent/basecomponent.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReportmanService } from '../../services/ApplicationServices/reportman.service';
import { OrderTypes, AddressShipingType, BussinessSegment, DeliveryToEnum } from '../../EnumData/EnumDataRequest';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddressTypeMasterResponse, CitydataResponse, CommItemWebResponse, CustomerResponse, WebOrderRailsResponse } from '../../ResponseModel/ReportResponse';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { WebOrderRequest } from '../../RequestModel/ReportRequest';


@Component({
  selector: 'app-requestorder',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgbModule, NgxSpinnerModule],
  templateUrl: './requestorder.component.html',
  styleUrl: './requestorder.component.scss'
})
export class RequestorderComponent extends BasecomponentComponent implements OnInit {
  orderType: any[] = Object.keys(OrderTypes).filter(key => isNaN(Number(key)));
  Bussinesssegmenttype: any[] = Object.keys(BussinessSegment).filter(key => isNaN(Number(key)));
  AddressshipingTypes = Object.keys(AddressShipingType).filter(key => isNaN(Number(key)));
  DeliveryTotypes: any[] = Object.keys(DeliveryToEnum).filter(key => isNaN(Number(key)));
  frmorder!: FormGroup;
  selectedShipAddresstype!: string;
  orderDateval: any;
  TerminalDateval: any;
  TrainDDateval: any;
  selectedCustomer!: string;
  selectedDeliveryTo!: string;
  selectedCommodity!: string;
  selectedOrdertype1!: string;
  BusinessSegmentselect!: string;
  selectedTMLoading!: string;
  custmodel!: CustomerResponse[];
  addressTypeModel!: AddressTypeMasterResponse[];
  CommItemWebModel!: CommItemWebResponse[];
  WeborderModel!: WebOrderRequest[];
  cityModel!: CitydataResponse[];
  weborderdet!: WebOrderRailsResponse[];
  weborderdet1!: WebOrderRailsResponse[];
  maxOrderNo1!: number;
  terminalofloadingtypes: any[] = [];
  terminalofDestinattypes: any[] = [];
  shipinglineNoTypes: any[] = [];
  partyNameTypes: any[] = [];
  selectedTMDestination!: string;
  selectedShipingLineNo!: string;
  SelectedFinalDestination!: string;
  selectedPartyname!: string;
  selectedCity!: string;
  Model: WebOrderRequest = new WebOrderRequest();
  selectedFromDate: any;
 

  constructor(private router: Router, toast: ToastrService, private rpts: ReportmanService, private fb: FormBuilder, private spinner: NgxSpinnerService) {
    super(toast);
    this.createOrderForm();
  }
  ngOnInit(): void {
    this.spinner.show();
    this.selectedDeliveryTo = "0";
    this.selectedCommodity = "0";
    this.selectedCustomer = "0";
    this.selectedOrdertype1 = "0";
    this.selectedShipAddresstype = "0";
    this.BusinessSegmentselect = "0";
    this.selectedTMLoading = "0";
    this.selectedTMDestination = "0";
    this.selectedShipingLineNo = "0";
    this.SelectedFinalDestination = "0";
    this.selectedPartyname = "0";
this.selectedCity = "0";

const now = new Date();

    this.selectedFromDate = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };

    this.rpts.GetAddressList().subscribe({
      next: (result) => {
        this.addressTypeModel = result.value;

        this.terminalofloadingtypes = this.addressTypeModel.filter(cust => cust.addressType == "Terminal");
        this.terminalofDestinattypes = this.addressTypeModel.filter(cust => cust.addressType == "Terminal");
        this.shipinglineNoTypes = this.addressTypeModel.filter(cust => cust.addressType == "Terminal");

      }
    });

    this.rpts.WebOrderMasterdetail().subscribe({
      next: (result) => {
        this.weborderdet = result.value;
        this.maxOrderNo1 = Math.max(...this.weborderdet.map(item => item.WEBORDERNo));
        sessionStorage.setItem("Orderno", this.maxOrderNo1.toString());
      }
    });

   
    this.frmorder.patchValue({
      OrderNo: "WEB/RAIL/25-26/" + ( Number( sessionStorage.getItem("Orderno"))+1).toString(),
    });


    this.rpts.GetCustomerList().subscribe({
      next: (result) => {
        this.custmodel = result.value;
      }
    });

    this.rpts.GetcommItem().subscribe({
      next: (result) => {
        this.CommItemWebModel = result.value;
      }
    });
    this.rpts.GetAllCity().subscribe({
      next: (result) => {
        this.cityModel = result.value;
      }
    });



    this.spinner.hide();

  }
  onSubmit() {

   let val1 = (this.frmorder.get("OrderDate")?.value).year + "-" + (this.frmorder.get("OrderDate")?.value).month + "-" + (this.frmorder.get("OrderDate")?.value).day;
    this.Model.orderDate = formatDate(val1, 'yyyy-MM-dd', 'en');
    this.Model.documentType = "Order";
    this.Model.CommodityName = this.frmorder.get("Comodity")?.value;
    this.Model.BusinessSegment = this.frmorder.get("BusinessSegment")?.value;
    this.Model.RailorderType = this.frmorder.get("RailOrderType")?.value;
    this.Model.Sell_Customer_No = this.frmorder.get("Customer")?.value;
    this.Model.Sell_to_Customer_Name = this.frmorder.get("CustomerName")?.value;
    this.Model.Delivery_To = this.frmorder.get("DeliveryTo")?.value;
    this.Model.PartyName = this.frmorder.get("Partyname")?.value;
    this.Model.Weight_In_TON = this.frmorder.get("WeightInTons")?.value;
    this.Model.Rate_till_deliv_port = this.frmorder.get("Ratetilldelivport")?.value;
    this.Model.Shipping_Line_No = this.frmorder.get("ShipingLineNo")?.value;
    this.Model.Shipping_Line_Name = this.frmorder.get("ShipingLineName")?.value;
    this.Model.LoadingCity = this.frmorder.get("LoadingCity")?.value;
    this.Model.FinalDestination = this.frmorder.get("FinalDestination")?.value;
    this.Model.loadingPoint = this.frmorder.get("LoadingPoint")?.value;
    this.Model.TerminalofLoading = this.frmorder.get("TerminalOfLoading")?.value;
    this.Model.TerminalofDestination = this.frmorder.get("selectedTMDestination")?.value;
    this.Model.WebOrder = true;
    this.Model.OrderNo = this.frmorder.get("OrderNo")?.value;
    this.Model.PartyName = this.frmorder.get("Partyname")?.value;
    this.Model.WEBORDERNo = Number( sessionStorage.getItem("Orderno"))+1


    this.rpts.WebOrderMaster(this.Model).subscribe({
      next: (result) => {
        if (result.WEBORDERNo > 0) {
          this.showToaster(1, "Order Created Successfully", "Success");
          this.frmorder.reset();
           this.rpts.WebOrderMasterdetail().subscribe({
      next: (result1) => {
        this.weborderdet = result1.value;
        this.maxOrderNo1 = Math.max(...this.weborderdet.map(item => item.WEBORDERNo));
        sessionStorage.setItem("Orderno", this.maxOrderNo1.toString());
      }
    });

   
    this.frmorder.patchValue({
      OrderNo: "WEB/RAIL/25-26/" + ( Number( sessionStorage.getItem("Orderno"))+1).toString(),
    });
        }
        else {
          this.showToaster(3, "Order Not Created", "Error");
        }
      }
    });

  }
  createOrderForm() {
    this.frmorder = this.fb.group({
      OrderNo: [''],
      DeliveryTo: [''],
      BusinessSegment: [''],
      OrderDate: [''],
      RailOrderType: [''],
      Customer: [''],
      CustomerName: [''],
      Comodity: [''],
      LoadingPoint: [''],
      WeightInTons: [''],
      Ratetilldelivport: [''],
      ShipingLineNo: [''],
      LoadingCity: [''],
      TerminalOfLoading: [''],
      selectedTMDestination: [''],
      ShipingLineName: [''],
      FinalDestination: [''],
      Partyname: [''],
    });
  }
  onChangeCustomer() {
    let filterdata = this.custmodel.filter(cust => cust.no == this.selectedCustomer);
    this.frmorder.patchValue({
      CustomerName: filterdata[0].name
    });
  }

  onChangeComodity() {
    let filterdata = this.CommItemWebModel.filter(cust => cust.no == this.selectedCommodity);
    this.frmorder.patchValue({
      ComodityName: filterdata[0].description
    });
  }
  OnChangeshipingLineNo() {
    let filterdata = this.shipinglineNoTypes.filter(cust => cust.partyCode == this.selectedShipingLineNo);
    this.frmorder.patchValue({
      ShipingLineName: filterdata[0].partyName
    });
  }
  OnChangesDeliveryTo() {
    this.partyNameTypes = this.addressTypeModel.filter(cust => cust.addressType == this.selectedShipAddresstype);
  }
}
