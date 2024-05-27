import {Component, OnInit} from '@angular/core';
import {RoleService} from "../../role.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  constructor(private roleService : RoleService) {
  }
  isAdmin : boolean =false;
  ngOnInit() {

    this.isAdmin=this.roleService.isAdmin();
  }

}
