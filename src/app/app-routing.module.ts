import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { ViewPhotoComponent } from './view-photo/view-photo.component';
import { HomeComponent } from './home/home.component';
import { CarListingComponent } from './car-listing/car-listing.component';
import { NewCarComponent } from './new-car/new-car.component';
import { from } from 'rxjs';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'listing', component: CarListingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'upload', component: UploadPhotoComponent},
  {path: 'view', component: ViewPhotoComponent},
  {path: 'logout', redirectTo: ''},
  { path: 'changepassword', component: ChangePasswordComponent },
  { path: 'addcar', component: NewCarComponent },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
