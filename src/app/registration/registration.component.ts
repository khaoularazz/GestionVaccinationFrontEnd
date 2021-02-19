import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { Router } from '@angular/router';
import { ClientService} from '../client.service'
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  cl : Client = new Client();

  constructor(private clientService: ClientService,private router : Router) {
    
   }

  ngOnInit() {
    this.clientService.navigate()
  }
  
  saveClient(){

    this.clientService.createClient(this.cl).subscribe(data => {
      console.log(data);
      console.log(data["response"] );
      if(data=="invalid"){
      // alert("bobo");}
      Swal.fire({
         
        title: 'Error!',
        text: 'Email ou Password Invalid',
        icon: 'info',
        confirmButtonText: 'ok'
        
  
      });}
      else{
        localStorage.setItem("emailcl" , this.cl.email)
      this.router.navigate(['/Verification'] , { state: {email : this.cl.email , password :this.cl.password , code :data["response"] , nom : this.cl.nom , prenom : this.cl.prenom}});

  }  }),
    error => console.log(error);
    

    
    
  }

  
  
  onSubmit(){
  this.saveClient();
  

    console.log(this.cl);
    

    
  }

}

