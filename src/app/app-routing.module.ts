import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import {HomeComponent} from './home/home.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {AuthGaurdService} from './service/auth-gaurd.service';
import {SpringtutComponent} from './springtut/springtut.component';
import {AddtutComponent} from './addtut/addtut.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'about', component: EmployeeComponent},
  {path: 'spring', component: SpringtutComponent},

{ path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent , canActivate: [AuthGaurdService]},
  {path: 'add', component: AddtutComponent, canActivate: [AuthGaurdService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
