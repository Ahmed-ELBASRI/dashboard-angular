import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './top-header/top-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    TopHeaderComponent,
    SidebarComponent,
    SidebarComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ],
  exports: [
    TopHeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
