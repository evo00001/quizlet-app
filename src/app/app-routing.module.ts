import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExplanationsLayoutComponent } from './store/explanations-layout.component';
import { HomeLayoutComponent } from './store/home-layout.component';
import { AboutLayoutComponent } from './store/about-layout.component';
import { ArtsLayoutComponent } from './store/arts-layout.component';
import { StudySetLayoutComponent } from './store/studyset-layout.component';

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
