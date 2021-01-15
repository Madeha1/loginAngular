import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor( private router : Router) { }
  enter (username: string, password: string){
    if(username == 'admin' && password == 'admin'){
      localStorage.setItem('currentUser', username);
      this.router.navigate(['profile']);

      return true;
    } else{
      this.router.navigate(['loginpage']);
      return false;
    }
  }  

  isLoggedIn() {
    return localStorage.getItem('currentUser')?true : false;
  }
}
