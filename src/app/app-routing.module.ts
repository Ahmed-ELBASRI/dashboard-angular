import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditprofileComponent } from './vendeur/editprofile/editprofile.component';
import { RetoursComponent } from './elements/retours/retours.component';
import { CommandsComponent } from './elements/commands/commands.component';
import { PlansComponent } from './membership/plans/plans.component';
import { PaiementComponent } from './membership/paiement/paiement.component';
import { CommandDetailsComponent } from './elements/command-details/command-details.component';

const routes: Routes = [ 
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'Commands' , component: CommandsComponent },
  { path: 'plans' , component: PlansComponent },
  { path: 'paiement' , component: PaiementComponent  },
  { path: 'details/:id', component: CommandDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
