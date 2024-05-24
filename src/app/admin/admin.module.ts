import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListvendeurComponent } from './listvendeur/listvendeur.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListvendeurComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    ListvendeurComponent
  ]
})
export class AdminModule { }
