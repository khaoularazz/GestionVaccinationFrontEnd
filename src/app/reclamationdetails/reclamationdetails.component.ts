import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../client.service';


type  dtreclamation = {
  
  ef: String []
        
}

@Component({
  selector: 'app-reclamationdetails',
  templateUrl: './reclamationdetails.component.html',
  styleUrls: ['./reclamationdetails.component.css']
})
export class ReclamationdetailsComponent implements OnInit {

  id:string ;
  detail : string [] = []
  body : string 

  constructor(private clientService: ClientService ,private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.clientService.navigate()
    
    this.id = this.route.snapshot.params['id'] ;
    console.log(this.id)
    this.clientService.getreclamationByid(this.id).subscribe(data =>{
     // for(let b in data ){
      //  this.detail[b]=data[b]
       // console.log(b)
        console.log(data['ef'])
        this.detail = data['ef']
    

   console.log(this.detail)
  });

  error => console.log(error);
}

onSubmit(){
  
  this.id = this.route.snapshot.params['id'] ;
  this.clientService.traitementreclamation(this.id , this.body).subscribe(data =>{
  console.log(data)
  }

  );
  error => console.log(error);
  this.router.navigate(['/ListReclamation']);
  
}
}