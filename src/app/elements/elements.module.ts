import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetoursComponent } from './retours/retours.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { CommandsComponent } from './commands/commands.component';
import { BilanComponent } from './bilan/bilan.component';
import { GrapheComponent } from './bilan/graphe/graphe.component';
import { RecentCustComponent } from './bilan/recent-cust/recent-cust.component';
import { SalesActivityComponent } from './bilan/sales-activity/sales-activity.component';
import { RecentOrderComponent } from './bilan/recent-order/recent-order.component';



@NgModule({
  declarations: [
   
    RetoursComponent,
    CommandsComponent,
    BilanComponent,
    
    GrapheComponent,
          RecentCustComponent,
          SalesActivityComponent,
          RecentOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[
  ]
})
export class ElementsModule { }
