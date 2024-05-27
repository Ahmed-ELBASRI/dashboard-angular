import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditprofileComponent } from './vendeur/editprofile/editprofile.component';
import { RetoursComponent } from './elements/retours/retours.component';
import { CommandsComponent } from './elements/commands/commands.component';
import { BilanComponent } from './elements/bilan/bilan.component';
import { PlansComponent } from './membership/plans/plans.component';
import { PaiementComponent } from './membership/paiement/paiement.component';
import { CommandDetailsComponent } from './elements/command-details/command-details.component';
import { VarianteComponent } from './variantes/variante/variante.component';
import { ListvendeurComponent } from './admin/listvendeur/listvendeur.component';
import { VendeurpaiementComponent } from './admin/vendeurpaiement/vendeurpaiement.component';
import {authGuard} from "./auth.guard";
import { ProductsComponent } from './elements/products/products.component';
import { AttProductsComponent } from './elements/attproducts/attproducts.component';


const routes: Routes = [
  { path: 'editprofile', component: EditprofileComponent , canActivate : [authGuard]  ,data : {role : 'user'}},
  { path: 'Commands' , component: CommandsComponent },
  { path: 'retours' , component: RetoursComponent },
  { path: 'bilan' , component: BilanComponent },
  { path: 'plans' , component: PlansComponent },
  { path: 'paiement' , component: PaiementComponent},
  { path: 'details/:id', component: CommandDetailsComponent },
  { path: 'variante', component: VarianteComponent },
  { path: 'listvendeur', component: ListvendeurComponent , canActivate : [authGuard] , data : {role : ['admin','user']} },
  { path: 'listvendeur', component: ListvendeurComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'attproduit', component: AttProductsComponent},
  { path: 'vendeurpaiement/:id', component: VendeurpaiementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
