import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListvendeurComponent } from './listvendeur/listvendeur.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListvendeurComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ListvendeurComponent
  ]
})
export class AdminModule { }
