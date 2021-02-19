import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {
  cl : Client = new Client();
  minDate = new Date();
  maxDate = new Date(2021,8,7);
  daterend :any
  date =new FormControl(new Date());
  optionsSelect: Array<any>;
  k : boolean=false;
  city : boolean=false;
  tel: boolean=false;
  sex : boolean=false;
  age : boolean=false;
  dateb : boolean=false;
  vs: any
  // Data Picker Initialization


  constructor(private clientService: ClientService,private router : Router) {


   }

  ngOnInit() {
  
    this.clientService.navigate();
    this.optionsSelect = [
      { value: 'Feedback', label: 'Feedback' },
      { value: 'Report a bug', label: 'Report a bug' },
      { value: 'Feature request', label: 'Feature request' },
      { value: 'Other stuff', label: 'Other stuff' },
    ];
  }
 
  onSubmit(){
    
  
      console.log(this.cl.centrenom);
     
      let val =formatDate(this.daterend, 'dd/MM/yyyy','en');
      console.log(val.toString());
      this.cl.date=val;
      if(this.cl.ville!= null ){
        this.clientService.centrevac(this.cl).subscribe(data => {
         console.log(data)
          this.vs=data; 
        this.k=true;
          console.log(this.cl.centrenom);
        }),
        error => console.log(error);
      
      }
      else this.city=true;
    }
    
   
    onvalidate(){
    
      if(this.cl.ville== null ){
      this.city=true;}
      if(this.cl.tel== null ){
        this.tel=true;}
      if(this.cl.sex== null ){
          this.sex=true;}
      if(this.cl.age== null ){
          this.age=true;}
          if(this.cl.date== null ){
            this.dateb=true;}
      if(this.cl.ville!= null && this.cl.tel!= null && this.cl.sex!= null && this.cl.age!= null && this.cl.date!= null ){
        this.cl.email=localStorage.getItem('emailcl');
        console.log(this.cl.email);
        console.log(this.cl.centrenom);
      this.clientService.createrend(this.cl).subscribe(data => {
        console.log(data);
        if(data["response"]==1){
          Swal.fire({
        
            title: 'Error!',
            text: 'vous avez déja demandé un rendez-vous',
            icon: 'info',
            confirmButtonText: 'ok'
            
      
          });
          this.router.navigate(['/Home']);
        }
        else if(data["response"]==2){
         
            Swal.fire({
          
              title: 'Error!',
              text: 'vous pouvez pas prendre un rendez-vous, vous étes complètement vacciné',
              icon: 'info',
              confirmButtonText: 'ok'
              
        
            });
            this.router.navigate(['/Informations']);
        }
else{
  Swal.fire({
          
    title: 'success',
    text: 'rendez-vous pris avec succées, vous povez consulter votre email pour télecharger le recu',
    icon: 'success',
    confirmButtonText: 'ok'
    

  });
  this.router.navigate(['/Home']);
}
 
        
    
      }),
      error => console.log(error);
      
         
      }
    }
    
  }


