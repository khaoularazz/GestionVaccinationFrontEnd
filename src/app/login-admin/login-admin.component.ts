import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Client } from '../client';
import { ClientService } from '../client.service';
//import Swal from 'sweetalert2';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
@Injectable()
export class LoginAdminComponent implements OnInit {
  client :Client =new Client();
  b  : any;
  log :boolean=false;
 constructor(private clientService: ClientService,private router : Router) { }

 ngOnInit() {
  this.clientService.navigate()
 }
 
 authAdmin(){
  console.log(this.client);
 // console.log(data);
  this.clientService.loginAdmin(this.client).subscribe(data => {
     console.log(data);
        
         console.log(this.b); 
         if(data==null){
     // alert("bobo");}
     Swal.fire({
        
       title: 'Error!',
       text: 'Email ou Password Invalid',
       icon: 'info',
       confirmButtonText: 'ok'
       
 
     });}
      else{

        localStorage.setItem("adminville" , data["ville"] )
        localStorage.setItem("admincentrvac" , data["centrevaccination"])
        this.log=true;
      this.router.navigate(['/Home']);}
   }),
   error => console.log(error);
  
 }
 islog(){
   return this.log;
 }

 onSubmit(){
 this.authAdmin();
 
 
   

   
 }
}
