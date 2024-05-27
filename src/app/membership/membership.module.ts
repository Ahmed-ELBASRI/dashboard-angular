import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans/plans.component';
import { PaiementComponent } from './paiement/paiement.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PlansComponent,
    PaiementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    PaiementComponent,
    PlansComponent
  ]
})
export class MembershipModule { }
