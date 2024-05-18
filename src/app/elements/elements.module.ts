import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandesComponent } from './commandes/commandes.component';
import { RetoursComponent } from './retours/retours.component';



@NgModule({
  declarations: [
    CommandesComponent,
    RetoursComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ElementsModule { }
