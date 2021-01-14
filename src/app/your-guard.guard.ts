import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { ServeService } from './serve.service';

@Injectable({
  providedIn: 'root'
})
export class YourGuardGuard implements CanActivate {
  constructor(private ServeService: ServeService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):true|UrlTree {
    if(this.ServeService.isLoggedIn()) {
      return true;
    }
    else {
      this.router.parseUrl('/loginpage');
    }
  }
}
