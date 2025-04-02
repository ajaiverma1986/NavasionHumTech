import { Component, OnInit, signal } from '@angular/core';
import { BasecomponentComponent } from '../basecomponent/basecomponent.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReportmanService } from '../../services/ApplicationServices/reportman.service';
import { OrderTypes, AddressShipingType } from '../../EnumData/EnumDataRequest';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerResponse } from '../../ResponseModel/ReportResponse';

@Component({
  selector: 'app-requestorder',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgbModule],
  templateUrl: './requestorder.component.html',
  styleUrl: './requestorder.component.scss'
})
export class RequestorderComponent extends BasecomponentComponent implements OnInit {
  orderType: any[] = Object.keys(OrderTypes).filter(key => isNaN(Number(key)));
  AddressshipingTypes = Object.keys(AddressShipingType).filter(key => isNaN(Number(key)));
  frmorder!: FormGroup;
  selectedOrdertype = signal<OrderTypes>(OrderTypes['Order Type']);
  selectedShipAddresstype = signal<AddressShipingType>(AddressShipingType['Factory/Destination']);
  orderDateval: any;
  TerminalDateval: any;
  TrainDDateval: any;
  SelectedCust!:string;
  selectedCustomer!:string;
  custmodel!:CustomerResponse[];

  constructor(private router: Router, toast: ToastrService, private rpts: ReportmanService, private fb: FormBuilder) {
    super(toast);
    this.createOrderForm();
  }
  ngOnInit(): void {

    this.rpts.GetAddressTypeMaster().subscribe({
      next: (result) => {
        //console.log("Address Type List:-", result);
      }
    });

    this.rpts.GetCustomerList().subscribe({
      next: (result) => {
        this.custmodel=result.value;
      }
    });

    this.rpts.GetcommItem().subscribe({
      next: (result) => {
       // console.log("GetcommItem List:-", result);
      }
    });

    this.rpts.GetPostCode().subscribe({
      next: (result) => {
       // console.log("GetPostCode List:-", result);
      }
    });
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
      Customer: ['']
    });
  }
}
