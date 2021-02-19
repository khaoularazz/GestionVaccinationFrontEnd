import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {
  cl : Client = new Client();
  comments = ["gg","gggg"];
  comment :boolean=false;
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.navigate()
    
  }
  btn_post(){
    this.comment=true
    console.log(this.cl.nom);
    this.comments.push(this.cl.nom);
  }

}
