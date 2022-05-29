import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { FollowerComponent } from './components/follower/follower.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'profile/edit',
    component: EditProfileComponent,
  },
  {
    path: ':username/followers',
    component: FollowerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':username',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
