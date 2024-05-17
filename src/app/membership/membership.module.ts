import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans/plans.component';
import { SharedModule } from "../shared/shared.module";
import { CommandsComponent } from './commands/commands.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        PlansComponent,
        CommandsComponent
    ],
    exports: [
        PlansComponent,
        CommandsComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class MembershipModule { }
