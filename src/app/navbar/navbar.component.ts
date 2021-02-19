import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
v:any
  loggedinadmin : any;
  loggedinclient : any;
  loggedin : any;
  constructor(private authadmin :ClientService ,private router : Router){

  }
  logout(){
    this.loggedin=false;
    this.loggedinclient=false;
    this.loggedinadmin=false;
  }
  navigate(){
    
    this.v=false;
  }
  ngOnInit(){
    this.v=true
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
     
      }
      this.authadmin.v.subscribe((value) =>{ this.v=false
       })
  }

}
