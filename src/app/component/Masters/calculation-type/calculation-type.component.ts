import { Component, OnInit } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder } from '@angular/forms';
import { ConfigService } from '../../../services/ApplicationServices/config.service';
import { BasecomponentComponent } from '../../basecomponent/basecomponent.component';
import { ToastrService } from 'ngx-toastr';
import { CalculationMasterResponse } from '../../../ResponseModel/ConfigurationResponse';

@Component({
  selector: 'app-calculation-type',
  standalone: true,
  imports: [MatPaginatorModule,MatTableModule,MatCardModule],
  templateUrl: './calculation-type.component.html',
  styleUrl: './calculation-type.component.scss'
})
export class CalculationTypeComponent extends BasecomponentComponent implements OnInit {
  
  Modeldata!:CalculationMasterResponse[];
 
  constructor(private frmbuilder:FormBuilder,private mstdataservice:ConfigService,toast:ToastrService){
super(toast);
  }
  displayedColumns: string[] = ['CalculationTypeId', 'StatusName', 'CalculationTypeName'];
  dataSource = this.Modeldata;
   
  ngOnInit(): void {
    this.mstdataservice.ListCalculationType().subscribe({
      next:(SimpleResponse)=>{
        this.Modeldata=SimpleResponse.Result;
      }
    });
  }
  
}
