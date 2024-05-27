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
import { HttpClientModule } from '@angular/common/http';
import { CommandDetailsComponent } from './command-details/command-details.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { AttProductsComponent } from './attproducts/attproducts.component';
import { SingleCustComponent } from './bilan/recent-cust/single-cust/single-cust.component';


@NgModule({
  declarations: [

   
    RetoursComponent,
    CommandsComponent,
    BilanComponent,
    
    GrapheComponent,
          RecentCustComponent,
          SalesActivityComponent,
          RecentOrderComponent,

    RetoursComponent,
    CommandsComponent,
    CommandDetailsComponent,
    ProductsComponent,
    AttProductsComponent,
    SingleCustComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [],
})
export class ElementsModule {}
