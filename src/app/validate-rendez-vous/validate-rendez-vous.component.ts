import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
type rendez_vous = {
  id: string;
  nom: string;
  prenom: string;
  sex : string
  age  :number 
  tel:string;
  dose : number;        
}
@Component({
  selector: 'app-validate-rendez-vous',
  templateUrl: './validate-rendez-vous.component.html',
  styleUrls: ['./validate-rendez-vous.component.css']
})
export class ValidateRendezVousComponent implements OnInit {
ville:any
centrville:any
rdvs :rendez_vous[]=[]
  constructor(private clientService: ClientService,private router : Router) {

   }

  ngOnInit() {
    this.clientService.navigate()
    this.ville=localStorage.getItem('adminville');
    this.centrville=localStorage.getItem('admincentrvac');


 this.clientService.getRend(this.ville , this.centrville).subscribe(data => {
      console.log(data);
      for(let b in data ){
        this.rdvs[b]=data[b]
      }
      console.log(this.rdvs)
    }),
    error => console.log(error);
  }


  validerRendez_vous(id: any){

 this.clientService.validerRend(id).subscribe(data => {
      
    this.ville=localStorage.getItem('adminville');
    this.centrville=localStorage.getItem('admincentrvac');
console.log(this.rdvs)
this.rdvs=[]

 this.clientService.getRend(this.ville , this.centrville).subscribe(data => {
      console.log(data);
      for(let b in data ){
        this.rdvs[b]=data[b]
      }
      console.log(this.rdvs)
    }),
    error => console.log(error);
  
    }),
    error => console.log(error);
  }

}
