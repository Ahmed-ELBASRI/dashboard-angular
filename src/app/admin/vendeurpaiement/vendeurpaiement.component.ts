import { Component, OnInit } from '@angular/core';
import { VendeurPaiementService } from '../vendeurpaiement-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendeurpaiement',
  templateUrl: './vendeurpaiement.component.html',
  styleUrls: ['./vendeurpaiement.component.css']
})
export class VendeurpaiementComponent implements OnInit {
  paiements: { id_paiement: number, datepaiement: string, paymentMethod: string, planPaiementLibelle: string }[] = [];

  constructor(
    private route: ActivatedRoute,
    private vendeurPaiementService: VendeurPaiementService
  ) { }

  ngOnInit(): void {
    const vendeurIdString = this.route.snapshot.paramMap.get('id');
    if (vendeurIdString !== null) {
      const vendeurId = parseInt(vendeurIdString, 10); // Convertir la chaîne en nombre
      if (!isNaN(vendeurId)) {
        this.getPaiements(vendeurId);
      } else {
        console.error('L\'ID du vendeur n\'est pas un nombre valide');
      }
    } else {
      console.error('ID du vendeur non trouvé dans les paramètres de l\'URL');
    }
  }

  getPaiements(vendeurId: number): void {
    this.vendeurPaiementService.getPaiementsByVendeurId(vendeurId).subscribe(
      (data) => {
        this.paiements = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des paiements:', error);
      }
    );
  }
}
