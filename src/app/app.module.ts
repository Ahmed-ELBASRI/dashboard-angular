import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VendeurModule } from './vendeur/vendeur.module';
import { RouterModule } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { ElementsModule } from './elements/elements.module';
import { ProductsComponent } from './elements/products/products.component';
import {CommonModule, NgClass} from '@angular/common';
import { VariantesComponent } from './variantes/variantes.component';
import { VarianteComponent } from './variantes/variante/variante.component';
import { ListvendeurComponent } from './admin/listvendeur/listvendeur.component';
import {VendeurpaiementComponent} from "./admin/vendeurpaiement/vendeurpaiement.component";


@NgModule({
  declarations: [
    AppComponent,
    VariantesComponent,
    VarianteComponent,
    ListvendeurComponent,
    VendeurpaiementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    VendeurModule,
    FormsModule,
    RouterModule,
    VendeurModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
