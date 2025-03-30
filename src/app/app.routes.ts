import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/common/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './component/common/login/login.component';
import { PageNofoundComponent } from './page-nofound/page-nofound.component';
import { ForgetpwdComponent } from './component/common/forgetpwd/forgetpwd.component';
import { AuthGaurdLoginService, AuthGaurdService } from './services/auth-gaurd-login.service';
import { RegistrationComponent } from './component/common/registration/registration.component';
import { CreateAppComponent } from './component/APIM/create-app/create-app.component';
import { CreateAPIUserComponent } from './component/APIM/create-apiuser/create-apiuser.component';
import { UserProfileComponent } from './component/common/user-profile/user-profile.component';
import { RegisterComponent } from './component/Registration/register/register.component';
import { DeviceConnectComponent } from './component/Registration/device-connect/device-connect.component';


export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full',title:"Login"},
  {path: 'login', redirectTo: 'login', pathMatch: 'full',title:"Login"},
  {path: 'forget',component:ForgetpwdComponent,title:"Forget Password"},
  {path: 'PRegister',component:RegistrationComponent,title:"Register"},
  {path: 'register',component:RegisterComponent,title:"Register"},
  {path: 'ConnectD', component: DeviceConnectComponent,title:"Connection Manager"},
  {path: 'login', canActivate:[AuthGaurdLoginService], component:LoginComponent,title:"Login"},
  {
    path: 'Dashboard', canActivate:[AuthGaurdService], component: AdminDashboardComponent,title:"Dashboard", children: [
      
      {path: 'AppMgr', component: CreateAppComponent,title:"Application"},
      {path: 'APIuser', component: CreateAPIUserComponent,title:"Users"},
      {path: 'UserProfile', component: UserProfileComponent,title:"User Manager"},
    ]
  },
  { path: '**', pathMatch: 'full',  component: PageNofoundComponent }, 
];
