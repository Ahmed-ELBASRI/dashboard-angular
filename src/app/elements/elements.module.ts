import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandesComponent } from './commandes/commandes.component';
import { RetoursComponent } from './retours/retours.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CommandesComponent,
    RetoursComponent
  
    CommandsComponent
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
