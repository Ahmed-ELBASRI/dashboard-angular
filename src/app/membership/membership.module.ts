import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans/plans.component';
import { PaiementComponent } from './paiement/paiement.component';



@NgModule({
  declarations: [
    PlansComponent,
    PaiementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MembershipModule { }
