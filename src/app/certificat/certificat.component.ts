import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-certificat',
  templateUrl: './certificat.component.html',
  styleUrls: ['./certificat.component.css']
})
export class CertificatComponent implements OnInit {
email : any 
response : any
cl :Client =new Client();
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.cl.email=localStorage.getItem('emailcl');
    this.cl.nom=localStorage.getItem('nom');
    this.cl.prenom=localStorage.getItem('prenom');
    console.log(this.email);
    this.clientService.getCertificat(this.cl.email).subscribe(data => {
      console.log(data)
      this.response=data['response']
    }),
              error => console.log(error);
    
  }
Ondemander(){
  console.log(this.cl.email);
    this.clientService.demanderCertificat(this.cl.email).subscribe(data => {
              }),
              error => console.log(error);
              if(this.response==1){
                Swal.fire({
                    
                  title: 'success',
                  text:  'recu envoyé',
                  icon: 'success',
                  confirmButtonText: 'ok'
                        })}
}
}
