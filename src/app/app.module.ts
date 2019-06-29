import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule} from 'ngx-markdown';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CollapsibleModule} from 'angular2-collapsible';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SpringtutComponent } from './springtut/springtut.component';
import { AddtutComponent } from './addtut/addtut.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,

    LoginComponent,
    LogoutComponent,
    SpringtutComponent,
    AddtutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     MarkdownModule.forRoot(),
    HttpClientModule,
    FormsModule,
     BrowserAnimationsModule,
    CollapsibleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
