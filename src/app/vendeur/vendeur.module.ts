import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    EditprofileComponent
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
