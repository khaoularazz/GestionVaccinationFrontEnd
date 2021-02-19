import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from './client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedinadmin : any;
  loggedinclient : any;
  loggedin : any;
  constructor(private authadmin :ClientService ,private router : Router){
    /*this.loggedinadmin=this.authadmin.h;
   console.log(this.loggedin);*/
  }
  logout(){
    this.loggedin=false;
    this.loggedinclient=false;
    this.loggedinadmin=false;
  }
  ngOnInit(){
    this.authadmin.l.subscribe((value) =>{ this.loggedinadmin=value;if(this.loggedinclient || this.loggedinadmin)
      this.loggedin=true;
      console.log(this.loggedinadmin)})
    console.log(this.loggedinadmin);
       console.log(this.loggedinadmin);
  
  this.authadmin.logclient.subscribe((value) =>{ this.loggedinclient=value; if(this.loggedinclient || this.loggedinadmin){
    this.loggedin=true;
    console.log(this.loggedin);}})
  console.log(this.loggedinadmin);
     console.log(this.loggedinadmin);
     if(this.loggedinclient || this.loggedinadmin){
      this.loggedin=true;
      console.log(this.loggedin);
     
    /*this.router.events.subscribe(event=> {
      if(event.constructor.name==="NavigationEnd"){
        this.loggedinadmin=this.authadmin.logadmin;
        console.log(this.loggedinadmin);
        this.loggedinclient=this.authadmin.logclient;
        console.log(this.authadmin.logclient);
if(this.loggedinclient || this.loggedinadmin){
  this.loggedin=true;
  console.log(this.loggedin);*/
//}
      }
  }
  title = 'GestionVaccinationFront';
}
