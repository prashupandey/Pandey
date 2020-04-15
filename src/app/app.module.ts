import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';  
import {MatButtonModule} from '@angular/material/button';  
import {MatIconModule} from '@angular/material/icon';  

import { UserDashBoardComponent } from './user-dash-board/user-dash-board.component';
import { HeaderComponent } from './header/header.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DesignUploadComponent } from './design-upload/design-upload.component';
import { AddDesignComponent } from './add-design/add-design.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CreateOrderComponent } from './create-order/create-order.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserDashBoardComponent,
    HeaderComponent,
    DesignUploadComponent,
    AddDesignComponent,
    AdminDashboardComponent,
    CreateOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    SweetAlert2Module,
    FontAwesomeModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
