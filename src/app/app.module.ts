import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CallComponent } from './components/call/call.component';
import { OfferComponent } from './components/offer/offer.component';
import { CashinComponent } from './components/cashin/cashin.component';
import { CashoutComponent } from './components/cashout/cashout.component';
import { AccountComponent } from './components/account/account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    CallComponent,
    OfferComponent,
    CashinComponent,
    CashoutComponent,
    AccountComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      HttpClientModule,MatTableModule, BrowserAnimationsModule,MatMenuModule,MatFormFieldModule,MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
