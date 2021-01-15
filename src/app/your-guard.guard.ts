import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

import { ServeService } from './serve.service';

@Injectable({
  providedIn: 'root'
})

export class YourGuardGuard implements CanActivate {
  constructor(private ServeService: ServeService, private router: Router) {}

  canActivate(){
    if(this.ServeService.isLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['loginpage']);
      return false;
    }
  }
}
