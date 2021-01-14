import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
  providers:  [ ServeService ]
})
export class LoginpageComponent{
  path:string = "/loginpage";
  user:string ="";
  pass:string ="";
  constructor(private loginService: ServeService, public router: Router) {
   }
  valid:boolean;

  enter(){
    this.valid =this.loginService.enter(this.user , this.pass);
    if(this.valid){
      this.path = "/profile";
    }
  }
}


