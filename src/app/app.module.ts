import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { CompaniesComponent } from './components/companies/companies.component'
import { AgGridModule } from 'ag-grid-angular';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { RequestsComponent } from './components/requests/requests.component';
import { AddnewcompanyComponent } from './components/addnewcompany/addnewcompany.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderNavComponent,
    CompaniesComponent,
    SubscriptionsComponent,
    ComplaintsComponent,
    PaymentsComponent,
    RequestsComponent,
    AddnewcompanyComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgGridModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [authInterceptorProviders, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
