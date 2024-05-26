import { Component, OnInit } from '@angular/core';
import { listvendeurService } from '../listvendeur-service.service';
import {AdminVendeurDto} from "../../Dtos/AdminVendeurDto";

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


  validerVendeur(id_Vendeur: number) {

    const idAdmin =localStorage.getItem('id');
    const token : any=localStorage.getItem('token');
    const adminVendeurDto = new AdminVendeurDto();

    adminVendeurDto.AdminId = Number(idAdmin);

    // Assuming you have a method to get the AdminId
    adminVendeurDto.VendeurId = id_Vendeur;
    adminVendeurDto.Action = 'valider';

    this.listvendeurService.validerVendeur(adminVendeurDto,token).subscribe(
      Response => {
        console.log(Response);
        this.loadCommands();

      },
      Error => {
        console.log(Error);
      }

    );





  }

  banVendeur(id_Vendeur: number) {

    const idAdmin =localStorage.getItem('id');
    const token : any =localStorage.getItem('token');

    const adminVendeurDto = new AdminVendeurDto();

    adminVendeurDto.AdminId = Number(idAdmin);

    // Assuming you have a method to get the AdminId
    adminVendeurDto.VendeurId = id_Vendeur;
    adminVendeurDto.Action = 'banner';


    this.listvendeurService.bannerVendeur(adminVendeurDto,token).subscribe(
      Response => {
        console.log(Response);
        this.loadCommands();

      },
      Error => {
        console.log(Error);
      }

    );



  }
}
