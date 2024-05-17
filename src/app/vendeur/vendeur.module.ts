import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { SharedModule } from '../shared/shared.module';
import { CommandesComponent } from './commandes/commandes.component';



@NgModule({
  declarations: [
    EditprofileComponent,
    CommandesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    // VendeurModule
    EditprofileComponent
  ]
})
export class VendeurModule { }
