import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService} from '../client.service' ;


type reclamation = {
  id : string ;
  nom: string;
  prenom: string;
  ef: String []
        
}

@Component({
  selector: 'app-listreclamations',
  templateUrl: './listreclamations.component.html',
  styleUrls: ['./listreclamations.component.css']
})
export class ListreclamationsComponent implements OnInit {

  ville : string ;
  centre : string ;
  reclamations : reclamation[] =[];

  constructor(private clientService: ClientService , private router : Router) { }

  ngOnInit() {
this.clientService.navigate();
    this.getlistreclamation() ;
  }


  


  getlistreclamation() {

    this.ville= localStorage.getItem('adminville')
    this.centre= localStorage.getItem('admincentrvac')
    console.log(this.ville)
    console.log(this.centre)
    this.clientService.listereclamation(this.ville , this.centre).subscribe(data =>{

     console.log(data);

     for(let b in data ){
     this.reclamations[b]=data[b]
      console.log(b)
      console.log(data[b])
    }
    console.log(this.reclamations)
    }),
    
    error => console.log(error);
  
   }

   consulter(id : string){


this.router.navigate(['ReclamationDetail', id]) ;

   }


   


}
