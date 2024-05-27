import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  setRole(role: string): void {
    localStorage.setItem('role', role);
  }

  isAdmin(): boolean {
    return this.getRole() === 'admin';
  }

  isUser() : boolean {
    return this.getRole()==='user';
  }
  isVendeur() : boolean {
    return this.getRole()==='vendeur';
  }

  hasRole(expectedRole: string): boolean {
    return this.getRole() === expectedRole;
  }
}
