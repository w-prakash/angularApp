import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from '../services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class CanActiveRouteGuard implements CanActivate {
  constructor(private isadmin: Admin) {}
  canActivate() {
    if(!this.isadmin.isAdmin()) {
      window.confirm('You cannot access this Page, Contact to admin');
    }
    return this.isadmin.isAdmin();
  }
  
}
