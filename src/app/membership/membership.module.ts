import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans/plans.component';
import { PaiementComponent } from './paiement/paiement.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { CancelComponent } from './cancel/cancel.component';

@NgModule({
  declarations: [
    PlansComponent,
    PaiementComponent,
    SuccessComponent,
    CancelComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([])

  ],
  exports:[
    PlansComponent,
    PaiementComponent,
    RouterModule 
  ]
})
export class MembershipModule { }
