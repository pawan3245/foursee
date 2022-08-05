import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddnewcompanyComponent } from './components/addnewcompany/addnewcompany.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { RequestsComponent } from './components/requests/requests.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './_services/auth-guard.service'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
    
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
 
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    pathMatch: 'full'
    
  },
   {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full',
    canActivate : [AuthGuardService] 
  },
  {
    path: 'companies',
    component: CompaniesComponent,
    pathMatch: 'full',
    canActivate : [AuthGuardService] 
  },
  {
    path: 'subscriptions',
    component: SubscriptionsComponent,
    pathMatch: 'full',
    canActivate : [AuthGuardService] 
  },
  {
    path: 'complaints',
    component: ComplaintsComponent,
    pathMatch: 'full',
    canActivate : [AuthGuardService] 
  },
  {
    path: 'payments',
    component: PaymentsComponent,
    pathMatch: 'full',
    canActivate : [AuthGuardService] 
  },
  {
    path: 'requests',
    component: RequestsComponent,
    pathMatch: 'full',
    canActivate : [AuthGuardService] 
  },
  {
    path: 'addcompany',
    component: AddnewcompanyComponent,
    pathMatch: 'full',
    canActivate : [AuthGuardService] 
  },
  {
    path: 'settings',
    component: SettingsComponent,
    pathMatch: 'full',
    canActivate : [AuthGuardService] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
