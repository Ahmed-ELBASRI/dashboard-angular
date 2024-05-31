import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateStoreComponent } from './create-store/create-store.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateStoreComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    CreateStoreComponent

  ]
})
export class StoreModule { 


}
