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
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddProductComponent } from './store/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

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
    CategoryFlashCards,
    UserInfoComponent,
    AddProductComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
