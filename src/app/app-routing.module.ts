import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditprofileComponent } from './vendeur/editprofile/editprofile.component';
import { RetoursComponent } from './elements/retours/retours.component';
import { CommandsComponent } from './elements/commands/commands.component';
import { BilanComponent } from './elements/bilan/bilan.component';

const routes: Routes = [ 
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'Commands' , component: CommandsComponent },
  { path: 'retours' , component: RetoursComponent },
  { path: 'bilan' , component: BilanComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
