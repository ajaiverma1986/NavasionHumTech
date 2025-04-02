import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { LoginServiceService } from '../../../services/common/login-service.service';
import { NavHeaderComponent } from "../nav-header/nav-header.component";
import { FooterComponent } from "../footer/footer.component";
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxSpinnerService, NgxSpinnerModule } from "ngx-spinner";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgxSpinnerModule, RouterModule, CommonModule, NavHeaderComponent, FooterComponent, MatSliderModule, MatProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'

})
export class LoginComponent {

responsemdl!:any[];
usernamed!:string
UserPassd!:string;
  errors: any;
  constructor(private fb: FormBuilder, private loginService: LoginServiceService, private router: Router, private spinner: NgxSpinnerService) {
    this.createForm();
  }

  loginForm!: FormGroup;
  ngOnInit(): void {

    sessionStorage.clear();
  }
  createForm() {
    this.loginForm = this.fb.group({
      Usercode: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSubmit() {
    this.spinner.show();
this.usernamed=this.loginForm.get("Usercode")?.value;
this.UserPassd=this.loginForm.get("password")?.value;
    this.loginService.login().subscribe({
      next: (authorization) => {
        this.responsemdl=authorization.value;
        let filterdata=this.responsemdl.filter(username=>username.Web_User_Id==this.usernamed && username.Web_User_Password==this.UserPassd)
        
        if (filterdata.length==0) {
          sessionStorage.setItem("isloginvalid", "0")
          this.spinner.hide();
          alert("Invaild Username or Password");
        } else {
          sessionStorage.setItem("isloginvalid", "1")
          sessionStorage.setItem("Display Name", this.loginForm.get("Usercode")?.value);
          sessionStorage.setItem("Uname", this.loginForm.get("Usercode")?.value);
          this.router.navigate(['/Dashboard']);
          this.spinner.hide();
        }
      },
      error: (error) => {
        if (error.status == "401") {
          console.log("Authentication Failed");
          alert("Authentication Failed");
        }
      }
    });;
  }

}
