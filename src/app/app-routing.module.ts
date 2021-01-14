import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProfileComponent } from './profile/profile.component';
import { YourGuardGuard } from './your-guard.guard';

const routes: Routes = [
  {path : 'loginpage' , component: LoginpageComponent},
  {path : 'profile' , component: ProfileComponent ,   canActivate: [YourGuardGuard],}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
