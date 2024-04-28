import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "reset-password",
    component: ResetPasswordComponent
  },
  {
    path: "new-password",
    component: NewPasswordComponent
  },
];
