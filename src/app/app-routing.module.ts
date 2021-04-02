import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { CallComponent } from './components/call/call.component';
import { OfferComponent } from './components/offer/offer.component';
import { CashinComponent } from './components/cashin/cashin.component';
import { CashoutComponent } from './components/cashout/cashout.component';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
{ path: 'registration', component: RegistrationComponent },
{ path: '', component: LoginComponent },

{ path: 'home', component: HomeComponent },
{ path: 'call', component: CallComponent },
{ path: 'offer', component: OfferComponent },
{ path: 'cashin', component: CashinComponent },
{ path: 'cashout', component: CashoutComponent },
{ path: 'account', component: AccountComponent },
{ path: 'logout', component: RegistrationComponent },
{ path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
