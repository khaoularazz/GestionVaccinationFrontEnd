import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { VerificationComponent } from './verification/verification.component';
import { InformationsComponent } from './informations/informations.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { MatNativeDateModule , MatDatepickerModule } from '@angular/material';
import { ValidateRendezVousComponent } from './validate-rendez-vous/validate-rendez-vous.component';
import { ChartsComponent } from './charts/charts.component';
import { CertificatComponent } from './certificat/certificat.component';
import { HomeComponent } from './home/home.component';
import {  EffetsSecondairesComponent } from './effets-secondaires/effets-secondaires.component';
import {  ReclamationdetailsComponent } from './reclamationdetails/reclamationdetails.component';
import {  ListreclamationsComponent } from './listreclamations/listreclamations.component';
import {MatCheckboxModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    LoginAdminComponent,
    RegistrationComponent,
    VerificationComponent,
    InformationsComponent,
    RendezVousComponent,
    ValidateRendezVousComponent,
    ChartsComponent,
    CertificatComponent,
    HomeComponent,
    EffetsSecondairesComponent,
    ReclamationdetailsComponent,
    ListreclamationsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule ,
    MatDatepickerModule ,
    MatNativeDateModule,
MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
