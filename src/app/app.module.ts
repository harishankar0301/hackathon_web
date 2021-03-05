import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { ViewPhotoComponent } from './view-photo/view-photo.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
@NgModule({
  declarations: [ 
    AppComponent, NavbarComponent, SignupComponent, LoginComponent, UploadPhotoComponent, ViewPhotoComponent, ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
