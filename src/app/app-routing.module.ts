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


const routes: Routes = [
  
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'Commands' , component: CommandsComponent },

  { path: 'retours' , component: RetoursComponent },
  { path: 'bilan' , component: BilanComponent }

=======
  { path: 'plans' , component: PlansComponent },
  { path: 'paiement' , component: PaiementComponent  },
  { path: 'details/:id', component: CommandDetailsComponent },
  { path: 'variante', component: VarianteComponent },
  { path: 'listvendeur', component: ListvendeurComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
