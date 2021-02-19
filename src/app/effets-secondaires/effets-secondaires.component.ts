import { Component, OnInit } from '@angular/core';
import { ClientService} from '../client.service'

@Component({
  selector: 'app-effets-secondaires',
  templateUrl: './effets-secondaires.component.html',
  styleUrls: ['./effets-secondaires.component.css']
})
export class EffetsSecondairesComponent implements OnInit {

  evenements: string[] = []
  val : string 
  a : any 
  autre : any 
  email : any 
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.navigate()
  }
  onChange(event: any)
  { 

   console.log(event.source.value);
    this.evenements.push(event.source.value) ;
    console.log(this.evenements)
  }
  onSubmit(){
    
    
    this.evenements.push(this.autre) ;
    this.Reclamation() ;
     
      
    }

    Reclamation(){
      this.email = localStorage.getItem('emailcl')
      this.clientService.reclamation(this.evenements , this.email).subscribe(data => {
        console.log(data);
      }),
      error => console.log(error);
   
    }
  
    
    
  

      

   
      
    
}
