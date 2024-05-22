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
import { NgClass } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    VendeurModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
