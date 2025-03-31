import { Component, OnInit } from '@angular/core';
import { BasecomponentComponent } from '../basecomponent/basecomponent.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReportmanService } from '../../services/ApplicationServices/reportman.service';

@Component({
  selector: 'app-requestorder',
  standalone: true,
  imports: [],
  templateUrl: './requestorder.component.html',
  styleUrl: './requestorder.component.scss'
})
export class RequestorderComponent extends BasecomponentComponent implements OnInit {


  constructor(private router: Router, toast: ToastrService,private rpts:ReportmanService) {
    super(toast);
  }
  ngOnInit(): void {

    this.rpts.GetAddressTypeMaster().subscribe({
next:(result)=>{
  console.log("Address Type List:-",result);
}
    });

    this.rpts.GetCustomerList().subscribe({
      next:(result)=>{
        console.log("Customer List:-",result);
      }
    });

    this.rpts.GetcommItem().subscribe({
      next:(result)=>{
        console.log("GetcommItem List:-",result);
      }
    });

    this.rpts.GetPostCode().subscribe({
      next:(result)=>{
        console.log("GetPostCode List:-",result);
      }
    });
  }
}
