import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  client :Client =new Client();
   b  : any;
  constructor(private clientService: ClientService,private router : Router) { }

  ngOnInit() {
    this.clientService.navigate()
  }
  
  authClient(){

    this.clientService.loginClient(this.client).subscribe(data => {
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
       else if(data!=null){
        this.client.nom=data["nom"]
        this.client.prenom=data["prenom"]
        localStorage.setItem("emailcl" , this.client.email)
        localStorage.setItem("nom" , this.client.nom)
        localStorage.setItem("prenom" , this.client.prenom)
        console.log(this.client.email)
       this.router.navigate(['/Home']);}
    }),
    error => console.log(error);
   
  }

  onSubmit(){
  this.authClient();
  
  
    

    
  }
}
