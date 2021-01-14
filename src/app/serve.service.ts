import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor() { }
  enter (username: string, password: string){
    if(username == 'admin' && password == 'admin'){
      localStorage.setItem('currentUser', username);
      return true;
    }
    return false;
  }  

  isLoggedIn() {
    return localStorage.getItem('currentUser')?true : false;
  }
}
