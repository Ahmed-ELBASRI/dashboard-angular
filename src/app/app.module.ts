import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VendeurModule } from './vendeur/vendeur.module';
import { RouterModule } from '@angular/router';
import { ElementsModule } from './elements/elements.module';
import { ProductsComponent } from './elements/products/products.component';
import {CommonModule, NgClass} from '@angular/common';
import { VariantesComponent } from './variantes/variantes.component';
import { VarianteComponent } from './variantes/variante/variante.component';
import { ListvendeurComponent } from './admin/listvendeur/listvendeur.component';
import {VendeurpaiementComponent} from "./admin/vendeurpaiement/vendeurpaiement.component";
import {FormsModule} from "@angular/forms";
<<<<<<< HEAD
import { MembershipModule } from './membership/membership.module';

=======
import { HttpClientModule } from '@angular/common/http';
import { CommandDetailsService } from './elements/command-details/command-details.service';
import { StoreModule } from './store/store.module';
>>>>>>> c1f62b77e76f60191bd27ec2306fed6e2fed4f9d


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
    RouterModule,
    VendeurModule,
    CommonModule,
<<<<<<< HEAD
    MembershipModule
=======
    HttpClientModule,
    StoreModule
>>>>>>> c1f62b77e76f60191bd27ec2306fed6e2fed4f9d
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
