import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { TopNavBarComponent } from './navigation/topnavbar.component';
import { CategoryCardComponent } from './store/category.card';
import { CategoryCarouselComponent } from './store/category.carousel';
import { AppRoutingModule } from './app-routing.module';
import { ExplanationsLayoutComponent } from './store/explanations-layout.component';
import { HomeLayoutComponent } from './store/home-layout.component';
import { AboutLayoutComponent } from './store/about-layout.component';
import { ArtsLayoutComponent } from './store/arts-layout.component';
import { StudySetLayoutComponent } from './store/studyset-layout.component';
import { HelpCenterLayoutComponent } from './store/helpcenter-layout.component';
import { CategoryPressCardComponent } from './store/category.presscard';
import { CategoryAboutCarouselComponent } from './store/category.aboutcarousel';
import { CategoryClassCard } from './store/category.classcard';
import { CategoryFlashCards } from './store/category.flashcard';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    CategoryCarouselComponent,
    CategoryCardComponent,
    ExplanationsLayoutComponent,
    HomeLayoutComponent,
    AboutLayoutComponent,
    ArtsLayoutComponent,
    StudySetLayoutComponent,
    HelpCenterLayoutComponent,
    CategoryPressCardComponent,
    CategoryAboutCarouselComponent,
    CategoryClassCard,
    CategoryFlashCards
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
