import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {
  path:"",component:ContentComponent
},{
  path:"login",component:LoginComponent
},{
  path:"contactUs",component:ContactUsComponent
},{
  path:"aboutUs",component:AboutUsComponent
},{
  path:"cart",component:CartComponent
},{
  path:"courses",component:CoursesComponent
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
