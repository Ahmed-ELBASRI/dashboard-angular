import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetoursComponent } from './retours/retours.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommandsComponent } from './commands/commands.component';
import { HttpClientModule } from '@angular/common/http';
import { CommandDetailsComponent } from './command-details/command-details.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { AttProductsComponent } from './attproducts/attproducts.component';

@NgModule({
  declarations: [
    RetoursComponent,
    CommandsComponent,
    CommandDetailsComponent,
    ProductsComponent,
    AttProductsComponent,
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
