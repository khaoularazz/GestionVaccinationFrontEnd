import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {VerificationComponent} from './verification/verification.component'
import {InformationsComponent} from './informations/informations.component'
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { ValidateRendezVousComponent } from './validate-rendez-vous/validate-rendez-vous.component';
import { CertificatComponent } from './certificat/certificat.component';
import { ChartsComponent } from './charts/charts.component';
import { HomeComponent } from './home/home.component';
import {  EffetsSecondairesComponent } from './effets-secondaires/effets-secondaires.component';
import {  ReclamationdetailsComponent } from './reclamationdetails/reclamationdetails.component';
import {  ListreclamationsComponent } from './listreclamations/listreclamations.component';

const routes: Routes = [
{ path : 'LoginClient' , component : LoginComponent} ,
{ path : 'Certificat' , component : CertificatComponent} ,
{path : 'Registration' , component : RegistrationComponent } ,

{path : 'Verification' , component : VerificationComponent } ,

{path : 'Informations' , component : InformationsComponent } ,

{path: 'LoginAdmin', component: LoginAdminComponent },

{path: 'Rendez_vous', component: RendezVousComponent },
{path: 'ValiderRendez_vous', component: ValidateRendezVousComponent },
{path: 'Charts', component: ChartsComponent },
{path: 'Home', component: HomeComponent },
{path: 'Reclamation', component: EffetsSecondairesComponent },

{path: 'ListReclamation', component: ListreclamationsComponent },
{ path : 'ReclamationDetail/:id' , component :  ReclamationdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

