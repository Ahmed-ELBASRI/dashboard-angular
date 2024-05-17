import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { SharedModule } from '../shared/shared.module';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditprofileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    // VendeurModule
    EditprofileComponent
  ]
})
export class VendeurModule { }
