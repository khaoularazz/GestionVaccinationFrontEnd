import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../client';
import { ClientService} from '../client.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  code:any
  cl : Client = new Client();
  private route : ActivatedRoute ;

  constructor(private clientService: ClientService,private router : Router) {
    this.cl.nom =  this.router.getCurrentNavigation().extras.state.nom;
    this.cl.prenom =  this.router.getCurrentNavigation().extras.state.prenom;
    this.cl.email =  this.router.getCurrentNavigation().extras.state.email;
    this.cl.password =  this.router.getCurrentNavigation().extras.state.password;
    this.code=this.router.getCurrentNavigation().extras.state.code;

   }

  ngOnInit() {
    this.clientService.navigate()
  }
   
  verifier(){
  if(this.code==this.cl.code_ver){
    this.clientService.verifier(this.cl).subscribe(data => {
      console.log(data);

    }),

    error => console.log(error);
    this.router.navigate(['/Home' ]);}
    else {
      Swal.fire({
         
        title: 'Error!',
        text: 'code de vérification Invalid',
        icon: 'info',
        confirmButtonText: 'ok'
    })
  }

  }

  onSubmit(){


  this.verifier();
  

  }
}
