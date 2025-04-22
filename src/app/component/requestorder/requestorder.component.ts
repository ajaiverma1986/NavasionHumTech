import { Component, OnInit, signal } from '@angular/core';
import { BasecomponentComponent } from '../basecomponent/basecomponent.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReportmanService } from '../../services/ApplicationServices/reportman.service';
import { OrderTypes, AddressShipingType } from '../../EnumData/EnumDataRequest';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddressTypeMasterResponse, CommItemWebResponse, CustomerResponse } from '../../ResponseModel/ReportResponse';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-requestorder',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgbModule,NgxSpinnerModule],
  templateUrl: './requestorder.component.html',
  styleUrl: './requestorder.component.scss'
})
export class RequestorderComponent extends BasecomponentComponent implements OnInit {
  orderType: any[] = Object.keys(OrderTypes).filter(key => isNaN(Number(key)));
  AddressshipingTypes = Object.keys(AddressShipingType).filter(key => isNaN(Number(key)));
  frmorder!: FormGroup;
  selectedShipAddresstype!:string;
  orderDateval: any;
  TerminalDateval: any;
  TrainDDateval: any;
  selectedCustomer!:string;
  selectedDeliveryTo!:string;
  selectedCommodity!:string;
  selectedOrdertype1!:string;
  custmodel!:CustomerResponse[];
  addressTypeModel!: AddressTypeMasterResponse[];
  CommItemWebModel!:CommItemWebResponse[];

  constructor(private router: Router, toast: ToastrService, private rpts: ReportmanService, private fb: FormBuilder, private spinner: NgxSpinnerService) {
    super(toast);
    this.createOrderForm();
  }
  ngOnInit(): void {
    this.spinner.show();
    this.selectedDeliveryTo="0";
    this.selectedCommodity="0";
    this.selectedCustomer="0";
    this.selectedOrdertype1="0";
    this.selectedShipAddresstype="0";
    this.rpts.GetAddressList().subscribe({
      next: (result) => {
        this.addressTypeModel = result.value;

      }
    });

    this.rpts.GetCustomerList().subscribe({
      next: (result) => {
        this.custmodel=result.value;
      }
    });

    this.rpts.GetcommItem().subscribe({
      next: (result) => {
       this.CommItemWebModel=result.value;
      }
    });

    this.spinner.hide();
    
  }
  onSubmit() {

  }
  createOrderForm() {
    this.frmorder = this.fb.group({
      OrderType: [''],
      DeliveryTo: [''],
      OrderDate: [''],
      TerminalDate: [''],
      TrainDepatureDate: [''],
      Customer: [''],
      CustomerName: [''],
      DeliveryToName: [''],
      Comodity: [''],
      ComodityName: [''],
    });
  }
  onChangeCustomer() {
    let filterdata = this.custmodel.filter(cust => cust.no == this.selectedCustomer);
    this.frmorder.patchValue({
      CustomerName: filterdata[0].name 
    });
  }
  onChangeDeliveryTo() {
    let filterdata = this.addressTypeModel.filter(cust => cust.partyCode == this.selectedDeliveryTo);
    this.frmorder.patchValue({
      DeliveryToName: filterdata[0].partyName 
    });
  }
  onChangeComodity() {
    let filterdata = this.CommItemWebModel.filter(cust => cust.no == this.selectedCommodity);
    this.frmorder.patchValue({
      ComodityName: filterdata[0].description 
    });
  }
}
