import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExplanationsLayoutComponent } from './store/explanations-layout.component';
import { HomeLayoutComponent } from './store/home-layout.component';
import { AboutLayoutComponent } from './store/about-layout.component';
import { ArtsLayoutComponent } from './store/arts-layout.component';
import { StudySetLayoutComponent } from './store/studyset-layout.component';
import { HelpCenterLayoutComponent } from './store/helpcenter-layout.component';
import { AddProductComponent } from './store/add-product/add-product.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

const routes:Routes = [
  {
    path: '', component: HomeLayoutComponent
  },
  {
    path: 'explanations', component:ExplanationsLayoutComponent
  },
  {
    path: 'mission', component:AboutLayoutComponent
  }, 
  {
    path: 'arts-and-humanities', component: ArtsLayoutComponent
  },
  {
    path: 'create-set', component:StudySetLayoutComponent
  },
  {
    path: 'admin', component: AddProductComponent
  },
  {
    path: 'auth', component: AuthenticationComponent
  },
  {
    path: 'learn', component: HelpCenterLayoutComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
