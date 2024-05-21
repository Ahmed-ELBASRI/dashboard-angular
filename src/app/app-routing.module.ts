import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditprofileComponent } from './vendeur/editprofile/editprofile.component';
import { CommandsComponent } from './elements/commands/commands.component';
import { ProductsComponent } from './elements/products/products.component';
import { AttProductsComponent } from './elements/attproducts/attproducts.component';
import { PhotoProductsComponent } from './elements/photoproducts/photo-products.component';

const routes: Routes = [
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'Commands', component: CommandsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'attproducts', component: AttProductsComponent },
  { path: 'photoproduct', component: PhotoProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
