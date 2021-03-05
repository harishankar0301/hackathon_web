import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { ViewPhotoComponent } from './view-photo/view-photo.component';
const routes: Routes = [
  {path: '', component: SignupComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'upload', component: UploadPhotoComponent},
  {path: 'view', component: ViewPhotoComponent},
  {path: 'logout', redirectTo: ''},
  {path: 'changepassword', component:ChangePasswordComponent},
  {path: '**', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
