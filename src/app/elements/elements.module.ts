import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommandsComponent } from './commands/commands.component';
import { ProductsComponent } from './products/products.component';
import { AttProductsComponent } from './attproducts/attproducts.component';
import { PhotoProductsComponent } from './photoproducts/photo-products.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CommandsComponent,
    ProductsComponent,
    AttProductsComponent,
    PhotoProductsComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, SharedModule],
  exports: [],
})
export class ElementsModule {}
