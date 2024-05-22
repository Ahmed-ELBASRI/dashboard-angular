import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetoursComponent } from './retours/retours.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CommandsComponent } from './commands/commands.component';
import { HttpClientModule } from '@angular/common/http';
import { CommandDetailsComponent } from './command-details/command-details.component';



@NgModule({
  declarations: [
    RetoursComponent,
    CommandsComponent,
    CommandDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HttpClientModule
  ],
  exports:[
  ]
})
export class ElementsModule {}
