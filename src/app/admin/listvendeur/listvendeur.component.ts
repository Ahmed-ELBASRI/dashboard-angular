import { Component, OnInit } from '@angular/core';
import { listvendeurService } from '../listvendeur-service.service';

@Component({
  selector: 'app-listvendeur',
  templateUrl: './listvendeur.component.html',
  styleUrls: ['./listvendeur.component.css']
})
export class ListvendeurComponent implements OnInit {
  vendeurs:  any = [];
  constructor(private listvendeurService: listvendeurService){}
  ngOnInit(): void{
    this.loadCommands();
  }
  loadCommands(): void{
    this.listvendeurService.getVendeurs().subscribe(
    (response: any) => {
      this.vendeurs = response;
      console.log(response);
      console.log("getCommands");
    },
    (error) => {
      console.error('Error fetching profile data', error);
    }
  );
  }
}
