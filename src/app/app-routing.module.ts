import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditprofileComponent } from './vendeur/editprofile/editprofile.component';
import { PlansComponent } from './membership/plans/plans.component';
import { CommandsComponent } from './membership/commands/commands.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'plans', component: PlansComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
