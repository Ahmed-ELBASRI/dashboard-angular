import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {RoleService} from "./role.service";


export const authGuard: CanActivateFn = (route, state) => {

  const roleService = inject(RoleService);
 // const router = inject(Router);

  const userRole = roleService.getRole();
  const expectedRoles = route.data['role'];

  if (expectedRoles.includes(userRole)) {
    return true; // Allow access if user role matches any expected role
  } else {
    // Redirect to a not authorized page or home page
   // router.navigate(['/not-authorized']);
    return false;
  }

};
